

export class Train 
{

    _conexiones_CapaOculta_Entrada = [];
    _conexiones_CapaOculta_Salida = [];
    _conexiones_Entrada_Salida = [];
   
    _pesos_Entrada_Salida = [];

    static createArray(length) {
        let arr = new Array(length || 0),
            i = length;
    
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = this.createArray.apply(this, args);
        }
    
        return arr;
    }

    static EntrenarOfflineParadatemprana(iteracciones, entradasTotales, neuronasCapaOcultatotales , salidasTotales) {
        this.CrearPesosAleatoriosIniciales(neuronasCapaOcultatotales, entradasTotales , salidasTotales);
    } 
    
    

   static CrearPesosAleatoriosIniciales(neuronasCapaOcultatotales, entradasTotales , salidasTotales){
    let _pesos_CapaOculta_Entrada = this.createArray(neuronasCapaOcultatotales,entradasTotales);
  

        for (let i = 0; i < neuronasCapaOcultatotales ; i++)
		{		
			for (let j = 0; j < entradasTotales ; j++)
			{
					_pesos_CapaOculta_Entrada[i][j] =     Math.random(); 
			}
		}
		


        
	/*	for (let i = 0; i < salidasTotales ; i++)
		{
			//rna.Pesos_Balance_Salida[i] = Math.random(); 
			
			for (let j = 0; j < entradasTotales ; j++)
			{
				if(this._conexiones_Entrada_Salida[j][i] == 1)
				{	
					this._pesos_Entrada_Salida[j][i] = Math.random(); 
                    console.log('this._pesos_Entrada_Salida[j][i]' + this._pesos_Entrada_Salida[j][i]);
				}
			}
		}	*/	
    }


}


/*
public void EntrenarOfflineParadatemprana(int Iteracciones)
{	
CrearPesosAleatoriosIniciales();
SetdeDatos MisDatos = new SetdeDatos(EntradasTotales,Constantes.CodificacionBinaria);
double[][] Misentradas = MisDatos.GetDatos();
double ultimoerror_global = Integer.MAX_VALUE;
Error_global = 0;	
for(int i = 0 ; i < Iteracciones ; i++)
{
    MisDatos.GenerarSetdeDatos(EntradasTotales, Constantes.CodificacionBinaria);
    Misentradas = MisDatos.GetDatos();	
    if(i % 100 == 0)
    {
        Error_global /= 100;
        if(Error_global > ultimoerror_global)
        {
            rna = ultima;		
            for (int j = 0, max = Misentradas.length; j < max; j++) 
            {
                FeedForward(Misentradas,j);
            }	
            break;
        }
        else if (i != 0)
        {
            ultima = rna;
            ultimoerror_global = Error_global;
            Error_global = 0;
        }
    }	
    NuevosPesosEntradaSalida = new double[EntradasTotales][SalidasTotales];		
    NuevosPesosEntradaCapaoculta = new double[NeuronasCapaOcultatotales][EntradasTotales];		
    NuevosPesosCapaOcultaSalida = new double[NeuronasCapaOcultatotales][SalidasTotales];	
    NuevoPesoUmbralCapaOculta = new double[NeuronasCapaOcultatotales];
    NuevoPesoUmbralSalida = new double[SalidasTotales];		
    double error = 0;
    for (int j = 0, max = Misentradas.length; j < max ; j++)
    {		
        EjecutarAlgoritmo(Misentradas, j);	
        double error_actual = 0;			
        for (int k = 0; k < SalidasTotales ; k++)
        {				error_actual = DevovlerValorEsperado(k) - rna.Neuronas_Salida[k];
            error += error_actual*error_actual;	
        }				
    }
    error /= SalidasTotales;
    Error_global += error;		
    AsignarNuevosPesosalaRed();	
}

    for (int j = 0, max = Misentradas.length; j < max; j++) 
    {
        FeedForward(Misentradas,j);
    }

System.out.println("APRENDIDO Señor angel");
}*/