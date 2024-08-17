import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container);

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

root.render(navbar);
