import express from 'express'
import path from 'path'

import {config} from "../conf/config"

const app = express();

/**
 * Static routes
 */
app.use('/static', express.static(path.join(__dirname, '..', 'static')));
app.use('/lib/bootstrap', express.static(
    path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')));
app.use('/lib/jquery', express.static(
    path.join(__dirname, '..', 'node_modules', 'jquery', 'dist')));

/**
 * Server startup and shutdown
 */

app.listen(config["server-port"], () => {
    console.log(`Server listening at ${config["server-port"]}`)
});

process.on('exit', (code) => {
    console.log(`Server exiting with code ${code}`)
});
process.once('SIGINT', () => process.exit())
process.once('SIGUSR2', () => process.exit())