// Maluti TVET College — API Skeleton
// Built with Node.js and Express

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ─────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────
app.get('/', (req, res) => {
    res.json({
        message: 'Maluti TVET College API is running',
        version: '1.0.0',
        endpoints: [
            'GET  /api/programmes',
            'GET  /api/programmes/:id',
            'GET  /api/news',
            'GET  /api/campuses',
            'POST /api/contact',
            'POST /api/apply'
        ]
    });
});

// ─────────────────────────────────────────
// PROGRAMMES
// ─────────────────────────────────────────
app.get('/api/programmes', (req, res) => {
    res.json({
        success: true,
        data: [
            {
                id: 1,
                name: 'Electrical Infrastructure',
                type: 'NC(V)',
                level: 'Level 2-4',
                duration: '3 years',
                category: 'Engineering & Related Design',
                campus: ['Phuthaditjhaba', 'Harrismith']
            },
            {
                id: 2,
                name: 'Civil & Building',
                type: 'NC(V)',
                level: 'Level 2-4',
                duration: '3 years',
                category: 'Engineering & Related Design',
                campus: ['Phuthaditjhaba', 'Botha-Bothe']
            },
            {
                id: 3,
                name: 'Business Administration',
                type: 'NC(V)',
                level: 'Level 2-4',
                duration: '3 years',
                category: 'Business & Management',
                campus: ['Phuthaditjhaba', 'Harrismith', 'Mokhotlong']
            },
            {
                id: 4,
                name: 'Information Technology',
                type: 'NC(V)',
                level: 'Level 2-4',
                duration: '3 years',
                category: 'Business & Management',
                campus: ['Phuthaditjhaba', 'Harrismith']
            },
            {
                id: 5,
                name: 'Hospitality & Catering',
                type: 'NC(V)',
                level: 'Level 2-4',
                duration: '3 years',
                category: 'Hospitality & Tourism',
                campus: ['Phuthaditjhaba', 'Butha-Buthe']
            }
        ]
    });
});

// GET single programme by ID
app.get('/api/programmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid programme ID'
        });
    }
    res.json({
        success: true,
        message: `Programme ${id} retrieved successfully`,
        note: 'In production this will query the database'
    });
});

// ─────────────────────────────────────────
// NEWS
// ─────────────────────────────────────────
app.get('/api/news', (req, res) => {
    res.json({
        success: true,
        data: [
            {
                id: 1,
                title: 'Maluti TVET partners with local municipalities for graduate placement',
                date: '2026-04-22',
                category: 'Partnerships'
            },
            {
                id: 2,
                title: 'Student Council elections results announced',
                date: '2026-04-15',
                category: 'Campus Life'
            },
            {
                id: 3,
                title: 'College recognised at DHET annual excellence awards',
                date: '2026-04-08',
                category: 'Awards'
            },
            {
                id: 4,
                title: 'New computer lab opens at Harrismith campus',
                date: '2026-04-01',
                category: 'Infrastructure'
            }
        ]
    });
});

// ─────────────────────────────────────────
// CAMPUSES
// ─────────────────────────────────────────
app.get('/api/campuses', (req, res) => {
    res.json({
        success: true,
        data: [
            {
                id: 1,
                name: 'Phuthaditjhaba',
                type: 'Main Campus',
                address: '1 Sebe Street, Phuthaditjhaba, 9869',
                tel: '058 713 0678',
                email: 'main@malutitvet.edu.za'
            },
            {
                id: 2,
                name: 'Harrismith',
                type: 'Campus',
                address: '12 Warden Street, Harrismith, 9880',
                tel: '058 622 3421',
                email: 'harrismith@malutitvet.edu.za'
            },
            {
                id: 3,
                name: 'Botha-Bothe',
                type: 'Campus',
                address: '7 Lerotholi Road, Botha-Bothe',
                tel: '058 731 0045',
                email: 'bothabothe@malutitvet.edu.za'
            },
            {
                id: 4,
                name: 'Mokhotlong',
                type: 'Campus',
                address: '3 Main Road, Mokhotlong',
                tel: '058 745 0012',
                email: 'mokhotlong@malutitvet.edu.za'
            },
            {
                id: 5,
                name: 'Butha-Buthe',
                type: 'Campus',
                address: '15 College Street, Butha-Buthe',
                tel: '058 752 0034',
                email: 'buthabuthe@malutitvet.edu.za'
            },
            {
                id: 6,
                name: 'Thaba-Tseka',
                type: 'Campus',
                address: '8 Education Road, Thaba-Tseka',
                tel: '058 760 0098',
                email: 'thabatseka@malutitvet.edu.za'
            }
        ]
    });
});

// ─────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────
app.post('/api/contact', (req, res) => {
    const { name, email, phone, campus, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Name, email, and message are required'
        });
    }

    res.status(200).json({
        success: true,
        message: 'Message received successfully',
        note: 'In production this will send an email and save to database',
        received: { name, email, phone, campus, subject, message }
    });
});

// ─────────────────────────────────────────
// APPLICATIONS
// ─────────────────────────────────────────
app.post('/api/apply', (req, res) => {
    const { firstName, lastName, email, phone, programme, campus } = req.body;

    if (!firstName || !lastName || !email || !programme) {
        return res.status(400).json({
            success: false,
            message: 'First name, last name, email, and programme are required'
        });
    }

    res.status(201).json({
        success: true,
        message: 'Application submitted successfully',
        note: 'In production this will save to database and send confirmation email',
        applicationRef: 'APP-' + Date.now(),
        received: { firstName, lastName, email, phone, programme, campus }
    });
});

// ─────────────────────────────────────────
// 404 HANDLER
// ─────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

// ─────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`Maluti TVET API running at http://localhost:${PORT}`);
});