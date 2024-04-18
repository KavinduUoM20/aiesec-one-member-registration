import { NextApiRequest, NextApiResponse } from 'next';
import { json } from 'body-parser';

// Custom middleware function to parse JSON request bodies
export const bodyParserMiddleware = json();


// Middleware function to handle CORS (example)
export const corsMiddleware = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
  };