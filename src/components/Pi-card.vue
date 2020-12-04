<template>
    <div
        class="pi-card"
        @mousemove="getMousePositionInElement($event)"
        :style="{
           gridColumn: widget.position.column.start + '/' +  widget.position.column.end,
           gridRow: widget.position.row.start + '/' +  widget.position.row.end
        }"
    >
        <div class="widget_container">
            <component :is="widget.component" />
            <div class="resize-top"></div>
            <div class="resize-left"></div>
            <div class="resize-right"></div>
            <div class="resize-bottom"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pi-card",
        props: {
            widget: Object
        },
        data() {
            return {
                cursorPosition: {
                    inDash: {
                        x: Number,
                        y: Number
                    }
                }
            }
        },
        methods: {
            activateResize(){

            },
            getMousePositionInElement(event){

                const rect = event.target.getBoundingClientRect();
                this.cursorPosition.inDash.x = event.clientX - rect.left; //x position within the element.
                this.cursorPosition.inDash.y = event.clientY - rect.top;  //y position within the element.

                console.log(this.cursorPosition.inDash.x + "  " + this.cursorPosition.inDash.y)
            }
        }
    }
</script>

<style scoped>

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
