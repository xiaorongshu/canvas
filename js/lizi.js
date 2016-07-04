function lizi(option){
        this._init(option)
    }
    lizi.prototype={
        _init:function(option){
            this.x=option.x
            this.y=option.y
            this.innerRadius=option.innerRadius
            this.outerRadius=option.outerRadius
            this.innerColor=option.innerColor
            this.outerColor=option.outerColor
            this.innerOpacity=option.innerOpacity
            this.outerOpacity=option.outerOpacity
            this.color=option.color
            this.fontSize=option.fontSize
            this.text=option.text
            var _this=this
            this.group=new Konva.Group({
                x:_this.x,
                y:_this.y
            })
            ring = new Konva.Ring({
                x:0,
                y:0,
                innerRadius:_this.innerRadius,
                outerRadius:_this.outerRadius,
                fill: _this.outerColor,
                opacity:_this.outerOpacity
            });
            circle=new Konva.Circle({
                x:0,
                y:0,
                radius:_this.innerRadius,
                fill: _this.innerColor,
                opacity:_this.innerOpacity
            })
            text=new Konva.Text({
                x: 0 - _this.innerRadius,
                y: 0 - _this.fontSize/2,
                text: _this.text,
                fontSize: _this.fontSize,
                fontFamily: 'Calibri',
                stroke: _this.color,
                strokeWidth: 1,
                width:_this.innerRadius*2,
                align:'center'
            })
            this.group.add(ring)
            this.group.add(circle)
            this.group.add(text)
        },
        addToGroupOrLayer:function(GroupOrLayer){
            GroupOrLayer.add(this.group)
        }
    }

