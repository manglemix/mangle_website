function daysInMonth(month: number) {
    return new Date(new Date().getFullYear(), month, 0).getDate();
}


/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const response = await event.fetch("/schedule.json");
    var items: any[] = await response.json();
    const date = new Date();
    
    items = items.filter((item) => {
        if (item.date) {
            const splitted = item.date.split("/");
            const month = Number(splitted[0]) - 1;
            const day = Number(splitted[1]);

            var daysInAdvance;
            if (month - 1 == date.getMonth()) {
                daysInAdvance = day + daysInMonth(date.getMonth()) - date.getDate();
            } else if (month == date.getMonth()) {
                daysInAdvance = day - date.getDate();
            } else {
                return;
            }

            if (daysInAdvance > 7) {
                return;
            }

            var dayOfWeek = daysInAdvance + date.getDay();
            if (dayOfWeek > 7) {
                dayOfWeek -= 7;
            }
            item.days = [DAYS[dayOfWeek]];
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