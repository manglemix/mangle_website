<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const items = data.items;
    const date = new Date();
    
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
            {#if !item.days.includes(DAYS[date.getDay() + i])}
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

    .item {
    }
</style>