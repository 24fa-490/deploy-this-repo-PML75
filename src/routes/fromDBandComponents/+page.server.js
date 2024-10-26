
import sql from '$lib/server/database';

export async function load() {
    const rows = sql`
    SELECT
        containernumber,
        nameOfship,
        containersize,
        datecontainershipped
    FROM
        containersz`;

    console.log({rows});

    return { containers: rows };
}
