// Must be at top
import 'reflect-metadata';

import { createConnection } from 'typeorm';

import { typeOrmConfig } from './config';
import Customer from './models/Customer';
import Order from './models/Order';
import Service from './models/Service';
import Technician from './models/Technician';

(async () => {
    // App's main content. For example, this could be an Express or console app.
    const conn = await createConnection(typeOrmConfig);
    console.log('PG connected. App is ready to do work.');

    // Do work with Appointment, Doctor, and/or Patient

    // Closing the TypeORM db connection at the end of the app prevents the process from hanging at
    // the end (ex. when you use ctrl-c to stop the process in your console, or when Docker sends
    // the signal to terminate the process).
    await conn.close();
    console.log('PG connection closed.');
})();