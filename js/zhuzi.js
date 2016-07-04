function Zhuzi(option){
    this._init(option)
}
Zhuzi.prototype={
    _init:function(option){
        this.x=option.x;
        this.y=option.y;
        this.maxWidth=option.maxWidth;
        this.maxHeight=option.maxHeight;
        this.data=option.data;
        var _this=this;
        this.group=new Konva.Group({
            x:_this.x,
            y:_this.y
        })
        var line=new Konva.Line({
            points: [ 0, 0, _this.maxWidth, 0],
            stroke: 'skyblue',
            strokeWidth: 1,
            lineCap: 'round',
            lineJoin: 'round'
        })
        console.log(line)
        this.group.add(line)
        this.length=this.maxWidth/this.data.length;
        for(var i=0;i<this.data.length;i++) {
            var rect = new Konva.Rect({
                x: (1 / 4 + i) * _this.length,
                y: 0,
                width: 1 / 2 * _this.length,
                height: 0,
                fill: _this.data[i].color,
                cornerRadius: 5,
                shadowColor: "#000",
                shadowBlur: 10
            })
            var textTop = new Konva.Text({
                x:   i * _this.length,
                y:- 20,
                text: _this.data[i].value * 100 + "%",
                fontSize: 18,
                fontFamily: 'Calibri',
                fill:_this.data[i].color,
                width: _this.length,
                align: "center",
                name:'TextTop'
            })
            var textBottom = new Konva.Text({
                x:(1/4+i)*_this.length,
                y:0,
                text: _this.data[i].name,
                fontSize: 18,
                fontFamily: 'Calibri',
                fill: _this.data[i].color,
                width:1/2*_this.length,
                align: "center",
                rotation:30
            })
            this.group.add(rect)
            this.group.add(textTop)
            this.group.add(textBottom)
        }
    },
    addToGroupOrlayer:function(GroupOrlayer){
        GroupOrlayer.add(this.group)
    },
    moveTo:function(){
        var _this=this
        this.group.find('Rect').each(function(item,index){
            var tween1=new Konva.Tween({
                node:item,
                duration:1,
                y:0-_this.data[index].value*_this.maxHeight,
                height:_this.data[index].value*_this.maxHeight,
            })
            tween1.play()
        })
        this.group.find('.TextTop').each(function(item,index){
            var tween2=new Konva.Tween({
                node:item,
                duration:1,
                y:0-_this.data[index].value*_this.maxHeight-20
            })
            tween2.play()

        })
        console.log( this.group.find('.textTop'))

    }
}
