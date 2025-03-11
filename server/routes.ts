import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, waitlistFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Waitlist API endpoints
  app.post('/api/waitlist', async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = waitlistFormSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({ 
          success: false, 
          message: 'This email is already on our waitlist' 
        });
      }

      // Extract only the fields we want to store (excluding consent)
      const { consent, ...entryData } = validatedData;
      
      // Add to waitlist
      const newEntry = await storage.addToWaitlist(entryData);
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: 'Successfully added to waitlist!',
        data: newEntry 
      });
    } catch (error) {
      if (error instanceof Error) {
        // If it's a Zod validation error, convert to readable format
        if (error.name === 'ZodError') {
          const validationError = fromZodError(error);
          return res.status(400).json({ 
            success: false, 
            message: 'Validation error', 
            errors: validationError.message 
          });
        }
        return res.status(400).json({ 
          success: false, 
          message: error.message 
        });
      }
      
      // Generic server error
      return res.status(500).json({ 
        success: false, 
        message: 'An unexpected error occurred' 
      });
    }
  });

  // Get waitlist count
  app.get('/api/waitlist/count', async (_, res) => {
    try {
      const count = await storage.getWaitlistCount();
      return res.json({ count });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to get waitlist count' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
