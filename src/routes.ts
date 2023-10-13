import { Express, Request, Response } from 'express';
import { createUser, getUsers } from './controllers/user.controller';
import { getToken } from './controllers/token.controller';

/**
 * Function which allocates the routes for the application
 * @param app the express application
 */
const routes = (app: Express) => {
    // Default route
    app.get('/', (req: Request, res: Response) => res.status(200).send('Welcome to the express template'));
    
    // Login routes
    app.get('/api/token', getToken);

    // User routes
    app
    .route('/api/user')
    .get(getUsers)
    .post(createUser);

    // Catch all for unmatched routes
    app.all('*', (req, res) => {
        res.status(404).send('Not Found');
    });
};

export default routes;