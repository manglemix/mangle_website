/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const response = await event.fetch("/schedule.json");
    var items: any[] = await response.json();
    items = items.map((item) => {
        if (item.lastDate) {
            item.lastDate = item.lastDate.split("/");
        }
        return item;
    });
    items.sort((item1, item2) => {
        var splitted = item1.from.split(":");
        var item1Hour = Number(splitted[0]);
        const item1Minutes = Number(splitted[1].slice(0, 2));
        if (splitted[1].includes("PM") && item1Hour !== 12) {
            item1Hour += 12;
        }
        splitted = item2.from.split(":");
        var item2Hour = Number(splitted[0]);
        const item2Minutes = Number(splitted[1].slice(0, 2));
        if (splitted[1].includes("PM") && item2Hour !== 12) {
            item2Hour += 12;
        }
        if (item1Hour < item2Hour) {
            return -1;
        } else if (item1Hour > item2Hour) {
            return 1;
        } else if (item1Minutes < item2Minutes) {
            return -1;
        } else if (item1Minutes > item2Minutes) {
            return 1;
        }
        return 0;
    });
    return { items };
  }