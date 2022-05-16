class AnnComponent extends HTMLElement {

    _input = [];
    _hiddenLayer = [];
    _output;
    _canvas  = document.createElement('CANVAS');
    _ctx;
    _inputNeuronsPosition = [];
    _hiddenLayerNeuronsPosition = [];
    hiddenLayerGenotype = [];

    
    connectedCallback() {
        if (this._canvas.getContext) {
            this._ctx = this._canvas.getContext('2d');
            this._canvas.width  = 1200;
            this._canvas.height = 1000; 
            this._canvas.style.width  = '2400px';
            this._canvas.style.height = '2000px';
            this._canvas.style.marginInline = '50px';
          }

          this.append(this._canvas);
          this._canvas.style.border = '1px solid black'; 

       this.createInput();
       this.createHiddenLayer();
       this.completeHiddenLayerGenotype();



       for(let i= 0 ; i< this._input.length ; i++)
       {
        this._ctx.fillStyle = 'rgb(200, 0, 0)';
        this._ctx.fillRect(10,  i *  (900/this._input.length) + 900/this._input.length, 15, 15);
        this._inputNeuronsPosition.push( i *  (900/this._input.length) + 900/this._input.length);
        console.log(this._inputNeuronsPosition[i]);
       }

       
       for(let i= 0 ; i< this._hiddenLayer.length ; i++)
       {
        this._ctx.fillStyle = 'rgb(20, 100, 20)';
        this._ctx.fillRect(100,  i * (800/this._hiddenLayer.length) + 800/this._hiddenLayer.length, 15, 15);
        this._hiddenLayerNeuronsPosition.push(  i * (800/this._hiddenLayer.length) + 800/this._hiddenLayer.length );
        console.log(this._hiddenLayerNeuronsPosition[i]);
       }

       
       for(let i= 0 ; i< 1 ; i++)
       {
        this._ctx.fillStyle = 'rgb(20, 100, 20)';
        this._ctx.fillRect(200,  400, 15, 15);
       }

       



       const colors = ['#ff0000', '#33FF7A' , '#D1FF33' ,'#FF33A5','#8333FF',  '#3380FF' ];


       let index = 0;
       for(let i= 0 ; i< this._input.length ; i++)
       {
        for(let k= 0 ; k< this._hiddenLayer.length ; k++)
        {
            if( this.hiddenLayerGenotype[index] > 0)
            {
                this._ctx.beginPath();
                this._ctx.moveTo(10, this._inputNeuronsPosition[i]);
                this._ctx.lineTo(100, this._hiddenLayerNeuronsPosition[k]);
                this._ctx.strokeStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
                this._ctx.stroke();
            }
            index++;
        }
       }



       for(let k= 0 ; k< this._hiddenLayer.length ; k++)
       {
           if( this._hiddenLayer[k] > 0)
           {
               this._ctx.beginPath();
               this._ctx.moveTo(100, this._hiddenLayerNeuronsPosition[k]);
               this._ctx.lineTo(200, 400);
               this._ctx.strokeStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
               this._ctx.stroke();
           }
       }


       for(let k= 0 ; k< this._input.length ; k++)
       {
           if( this._input[k] > 0)
           {
               this._ctx.beginPath();
               this._ctx.moveTo(10, this._inputNeuronsPosition[k]);
               this._ctx.lineTo(200, 400);
               this._ctx.strokeStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
               this._ctx.stroke();
           }
       }


    }


    createInput()
    {
        for(let i= 0 ; i<6 ; i++)
        {
           this._input.push(this.getRandom());
        }
    }


    createHiddenLayer()
    {
        for(let i= 0 ; i<this.getRandomArbitrary(1,50) ; i++)
        {
           this._hiddenLayer.push(this.getRandom());
        }

    }


    completeHiddenLayerGenotype() {
        for(let i= 0 ; i<this.getRandomArbitrary(this._hiddenLayer.length * 5,this._hiddenLayer.length * 5) ; i++)
        {
           this.hiddenLayerGenotype.push(this.getRandom());
        }
        this.hiddenLayerGenotype = this._hiddenLayer.concat( this.hiddenLayerGenotype);
        console.log(  this.hiddenLayerGenotype  + '  this.hiddenLayerGenotype ');
        
    }

     getRandomArbitrary(min, max) {
        return  Math.random() * (max - min) + min;
      }


      getRandom()
    {
        const random =  Math.random();
    
        return  parseFloat(random) < 0.499 ? 0 : 1;
    }
    

}



customElements.define('ann-component', AnnComponent);
