const db = require('./conn');

class Ranking {
    static async joinSkillsWithRanks() {
        try {
            const response = await db.any(
                `SELECT topic_name, rank_name FROM topics
                INNER JOIN rank_scale
                ON topic_rank = rank_scale.id`);
            console.log(`response: ${response}`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getSkillLevels() {
        try {
            const response = await db.any(`SELECT rank_name FROM rank_scale`);
            console.log(`response: ${response}`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getTopicNames() {
        try {
            const response = await db.any(`SELECT topic_name FROM topics`);
            console.log(`response: ${response}`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

}


module.exports = Ranking;