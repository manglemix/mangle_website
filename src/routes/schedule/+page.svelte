<script lang="ts">
    function daysInMonth(month: number) {
        return new Date(new Date().getFullYear(), month, 0).getDate();
    }

    /** @type {import('./$types').PageData} */
    export let data;
    var items = data.items;
    const date = new Date();
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    items = items.filter((item: any) => {
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

            if (daysInAdvance >= 7 || daysInAdvance < 0) {
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
</script>

<div class="timetable">
    {#each { length: 7 } as _, i}
    <div class="column">
        {#if date.getDay() + i >= 7}
            {DAYS[date.getDay() + i - 7]}
        {:else}
            {DAYS[date.getDay() + i]}
        {/if}
        <hr>

        {#each items as item}
            {#if (date.getDay() + i < 7 && !item.days.includes(DAYS[date.getDay() + i])) || (date.getDay() + i >= 7 && !item.days.includes(DAYS[date.getDay() + i - 7]))}
                <!-- Wrong day -->
            {:else}
            <div class="item">
                {item.from}<br>
                <b>{item.name}</b><br>
                {#if item.location}
                    {item.location}<br>
                {/if}
                {item.to}
            </div>
            <hr>
            {/if}
        {/each}
    </div>
    {/each}
</div>

<style>
    .column {
        margin-left: 10px;
        display:inline-block;
        vertical-align: top;
    }
    
    .timetable {
        display:inline-block;
    }
</style>