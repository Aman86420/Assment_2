const db = require("../db.js");

// add a new school
exports.addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;
        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await db.execute("INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
            [name, address, latitude, longitude]);

        res.status(201).json({ message: "School added successfully" });
    } catch (error) {
        // console.error("Error fetching schools:", error);
        //  // Log the error to console
        console.log("DB Object:", db);
        res.status(500).json({ error: "Server error", details: error.message });


    }
};

// listin schools sorted by distance
exports.listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: "Latitude and Longitude are required" });
        }

        const [schools] = await db.execute("SELECT * FROM schools");

        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const toRad = (value) => (value * Math.PI) / 180;
            const R = 6371; // Radius of Earth in KM
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        const sortedSchools = schools.map(school => ({
            ...school,
            distance: calculateDistance(latitude, longitude, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
