<template>
    <div
        class="pi-dashboard"
        id="pi-dashboard"
        @mousemove="handleDashActions($event)"
        :style="{
            gridTemplateColumns: settings.gridTemplateColumns,
            gridTemplateRows: settings.gridTemplateRows,
            gridGap: settings.gridGap
        }"
    >
        <!-- Card -->
        <div
            class="pi-card"
            v-for="(widget, index) in widgets.widgets"
            :key="index"
            :style="{
               gridColumn: widget.position.column.start + '/' +  widget.position.column.end,
               gridRow: widget.position.row.start + '/' +  widget.position.row.end
            }"
        >
            <component :is="widget.component" />
            <!-- resize divs -->
            <div class="resize-top" @mousedown="activateResize($event, index, 'top')"></div>
            <div class="resize-left" @mousedown="activateResize($event, index, 'left')"></div>
            <div class="resize-right" @mousedown="activateResize($event, index, 'right')"></div>
            <div class="resize-bottom" @mousedown="activateResize($event, index, 'bottom')"></div>
            <!---------->
        </div>
        <!---------->
    </div>
</template>

<script>
import PiCard from './Pi-card'

export default {
    name: "pi-dashboard",
    components: {
      PiCard
    },
    props: {
        settings: Object,
        widgets: Object
    },
    data() {
        return {
            cursorPosition: Object,
            dashActions: {
                resize: {
                    status: false,
                    direction: String,
                },
                componentId: Number,
                element: Object,
                mousePositionAtStart: Object
            }
        }
    },
    methods: {
        activateResize(event, index, resizeDirection){

            this.dashActions.resize.status = true
            this.dashActions.resize.direction = resizeDirection
            this.dashActions.componentId = index

            // Get card
            this.dashActions.element = event.target.parentElement
            const card = event.target.parentElement
            // eslint-disable-next-line no-unused-vars
            const dash = card.parentElement
            console.log(dash.clientWidth)
            console.log(card.offsetLeft)
            // eslint-disable-next-line no-unused-vars
            const cardGridDimension = card.getBoundingClientRect();
            card.style.position = "absolute" //event.target.parentElement.parentElement
            card.style.top = card.offsetTop + "px"
            card.style.left = card.offsetLeft + "px"
            card.style.right = dash.clientWidth - (card.offsetLeft + card.clientWidth) + "px"
            card.style.gridArea = "";
            // card.style.width = cardGridDimension.width + "px";
            // card.style.height = cardGridDimension.height + "px";


        },
        // eslint-disable-next-line no-unused-vars
        handleDashActions(event){

            if (this.dashActions.resize.status){
                switch (this.dashActions.resize.direction) {
                    case 'top':
                        //card.style.top = event.clientY + "px"
                        //this.dashActions.element.style.height = this.dashActions.element.style.height
                        break
                    case 'left':
                        break
                    case 'right':
                        break
                    case 'bottom':
                        break
                }
            }
        },
        getMousePositionInElement(event){

            // eslint-disable-next-line no-unused-vars
            const rect = event.target.getBoundingClientRect();
            const dash = document.getElementById('pi-dashboard').getBoundingClientRect();

            this.cursorPosition = {
                inDash: {
                    x: event.clientX - dash.left,
                    y: event.clientY - dash.top
                }
            }

        }
    },
    // mounted() {
    //   console.log(this.widgets)
    // }
}
</script>

<style scoped>


    /* Dashboard */
    .pi-dashboard{
        position: relative;

        display: grid;

        margin: 2rem;

        border: 1px solid black;
    }

    /* Cards */
    .pi-card{
        position: relative;
        box-sizing: border-box;
    }

    .widget_container{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .resize-top{
        position: absolute;
        width: 100%;
        height: 3px;
        top: 0;
        background: black;
        cursor: ns-resize;
    }

    .resize-bottom{
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        background: black;
        cursor: ns-resize;
    }

    .resize-left{
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: 0;
        background: black;
        cursor: ew-resize;
    }

    .resize-right{
        position: absolute;
        width: 3px;
        height: 100%;
        right: 0;
        top: 0;
        background: black;
        cursor: ew-resize;
    }
</style>
