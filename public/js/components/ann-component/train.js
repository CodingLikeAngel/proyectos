function createArray  (length)  {
    let arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

let dataset = createArray(4,2);
dataset[0][0] = 0;
dataset[0][1] = 0;

dataset[1][0] = 0;
dataset[1][1] = 1;

dataset[2][0] = 1;
dataset[2][1] = 0;

dataset[3][0] = 1;
dataset[3][1] = 1;
let learn_factor = 0.1;



let neurons_I = [];
let neurons_H = [];
let neurons_O = [];
let mapping_I_O;
let mapping_H_I;
let mapping_H_O ;
let weights_H_I;
let weights_H_O;
let weights_I_O
let weights_H_BIAS = [];
let weights_O_BIAS= [];
let deltas_H_BIAS = [];
let deltas_O_BIAS = [];

let deltas_I_O = [];
let deltas_H_I = [];
let deltas_H_O = [];


let errors_O = [];
let errors_H = [];


let _entradasTotales;
let _neuronasCapaOcultatotales;
let _salidasTotales;


export const  TrainingOffline = (iteracciones, entradasTotales, neuronasCapaOcultatotales , salidasTotales , hiddenLayerGenotype , inputGenotype , mappingH_O) =>
{	

	mapping_H_I = hiddenLayerGenotype;
	mapping_I_O = inputGenotype;
	mapping_H_O = mappingH_O;
	_entradasTotales = entradasTotales;
	_neuronasCapaOcultatotales = neuronasCapaOcultatotales;
	_salidasTotales = salidasTotales;


	//first random weights
	crearPesosAleatoriosIniciales();
	

	
	let last_eval_error = 9999999999;
	let eval_error = 0;
	for(let i = 0 ; i < iteracciones ; i++)
	{
	
//	console.log("____________________________ITERATION___"  + (i + 1) + " of "+ iteracciones);
		
	
		
	/*	if(Const.ETYPE == EvalType.EARLY_STOP && i % Const.RANGE == 0)
		{
			ann_last = ann;
			eval_error /= Const.RANGE;
			if(eval_error > last_eval_error)
			{
				System.out.println("VICTORYYYYYYYY");
				System.out.println("FINISHED IN ITERATION:__  " + (i - 1));
				
				ann = ann_last;
				
				for (int j = 0, max = dataset.length; j < max; j++) {
					FeedForward(dataset,j);
				}
				
				break;
			}
			else if (i != 0)
			{
				last_eval_error = eval_error;
				eval_error = 0;
			}
		}*/
		
		//RESET DELTAS
	deltas_I_O = createArray(_entradasTotales,_salidasTotales);	//input -> output weight
			deltas_H_I =  createArray(_neuronasCapaOcultatotales,_entradasTotales);		//input -> length_H weight
			deltas_H_O = createArray(_neuronasCapaOcultatotales,_salidasTotales);		//length_H -> output weight

		deltas_H_BIAS =new Array(_neuronasCapaOcultatotales);
		deltas_O_BIAS  =new Array(_salidasTotales);
		
		let error = 0;
		
		for (let j = 0, max = dataset.length; j < max ; j++)
		{	
			
			feedForward(dataset,j);
			BackPropagation();
		//	DeltaWeights();
			
			let current_error = 0;
			for (let k = 0; k < _salidasTotales ; k++)
			{
				current_error = ExpectedValue_XOR(k) - neurons_O[k];
				error += Math.pow(current_error,2);
			
			}				
		}
		error /= dataset.length;
		eval_error += Math.pow(error,2);
		
	//	System.out.println("________________________________________________________GLOBAL_ERROR___" + error);
	//	System.out.println("\n");
		
		if(error < 0.2)
		{
			console.log("VICTORYYYYYYYY");
			console.log("FINISHED IN ITERATION:__  " + i);
			
			for (let j = 0, max = dataset.length; j < max; j++) {
				feedForward(dataset,j);
			}
		
		}
		
		WeightsCorrection();
	}
	
/*	if(Const.ETYPE == EvalType.EARLY_STOP)
	{
		for (let j = 0, max = dataset.length; j < max; j++) {
			feedForward(dataset,j);
		}
	}*/
	
	for (let j = 0, max = dataset.length; j < max; j++) {
		feedForwardd(dataset,j);
	}
	console.log("END");
}




    export const  entrenarOfflineParadatemprana = (iteracciones, entradasTotales, neuronasCapaOcultatotales , salidasTotales , hiddenLayerGenotype , inputGenotype , mappingH_O) => {
        mapping_H_I = hiddenLayerGenotype;
        mapping_I_O = inputGenotype;
        mapping_H_O = mappingH_O;
        _entradasTotales = entradasTotales;
        _neuronasCapaOcultatotales = neuronasCapaOcultatotales;
        _salidasTotales = salidasTotales;
        crearPesosAleatoriosIniciales(neuronasCapaOcultatotales, entradasTotales , salidasTotales);

        let sets = 4;
		let min = 0;
		let binary = true;
	
        let error = 90;
		let last_eval_error = 99999999;
		let eval_error = 0;
       
      
		for(let i = 0 ; i < 100500 ; i++)
		{
            if( error > 0.0001)
            {

                eval_error /= 100;
				if(eval_error > last_eval_error)
				{
				//	System.out.println("VICTORYYYYYYYY");
				//	System.out.println("FINISHED IN ITERATION:__  " + (i - 1));
					
				
                feedForward(dataset,0);
                feedForward(dataset,1);
                feedForward(dataset,2);
                feedForward(dataset,3);
				//	break;
				}
				else if (i != 0)
				{
					last_eval_error = eval_error;
					eval_error = 0;
				}

    
			//console.log("____________________________ITERATION___"  + (i + 1) + " of "+ 'training_iterations');
			
			/*if(Const.DEBUG)
				PrintWeights();*/
			
		/*	if(Const.ETYPE == EvalType.EARLY_STOP && i % Const.RANGE == 0)
			{
				ann_last = ann;
				eval_error /= Const.RANGE;
				if(eval_error > last_eval_error)
				{
					System.out.println("VICTORYYYYYYYY");
					System.out.println("FINISHED IN ITERATION:__  " + (i - 1));
					
					ann = ann_last;
					
					FeedForward(dataset,0);
					FeedForward(dataset,1);
					FeedForward(dataset,2);
					FeedForward(dataset,3);
					break;
				}
				else if (i != 0)
				{
					last_eval_error = eval_error;
					eval_error = 0;
				}
			}*/
			
			//RESET DELTAS
			deltas_I_O = createArray(_entradasTotales,_salidasTotales);	//input -> output weight
			deltas_H_I =  createArray(_neuronasCapaOcultatotales,_entradasTotales);		//input -> length_H weight
			deltas_H_O = createArray(_neuronasCapaOcultatotales,_salidasTotales);		//length_H -> output weight
			
			deltas_H_BIAS =  [];
			deltas_O_BIAS = [];
			
			
			for (let j = 0, max = dataset.length; j < max ; j++)
			{	
				
				feedForward(dataset,j);
				BackPropagation();
				DeltaWeights();
				
				let current_error = 0;
				for (let k = 0; k < _salidasTotales ; k++)
				{
					current_error = ExpectedValue_XOR(0) - neurons_O[k];
					error += Math.pow(current_error,2);
				}				
				
		/*		console.log("________________________________________________________EXPECTED_____" + ExpectedValue_XOR(0));
				console.log("__________________________________________________________NEURON_____" + neurons_O[0]);
				console.log("");*/
			}
			error /= dataset.length;
			eval_error += Math.pow(error,2);
			
		//	console.log("________________________________________________________GLOBAL_ERROR___" + error);
		//	console.log("\n");
			
			if( error < 0.0001)
			{
				console.log("VICTORYYYYYYYY");
				console.log("FINISHED IN ITERATION:__  " + i);
				
				feedForwardd(dataset,1);
				feedForwardd(dataset,0);
				feedForwardd(dataset,2);
				feedForwardd(dataset,3);

               	
			


             
			}
            else{
                WeightsCorrection();
            }
			
		
		}
		
	/*	if(Const.ETYPE == EvalType.EARLY_STOP)
		{
			FeedForward(dataset,0);
			FeedForward(dataset,1);
			FeedForward(dataset,2);
			FeedForward(dataset,3);
		}*/
    }
    if( error > 0.0001)
    {
        console.log("LOOOOSe");
        feedForwardd(dataset,0);
        feedForwardd(dataset,1);
        feedForwardd(dataset,2);
        feedForwardd(dataset,3);
    }
        
       
		
		console.log("END" + neurons_O);

	}
	
     
    
    

    const crearPesosAleatoriosIniciales = (neuronasCapaOcultatotales, entradasTotales , salidasTotales) =>{
     weights_H_I = createArray(neuronasCapaOcultatotales,entradasTotales);
     weights_H_O = createArray(neuronasCapaOcultatotales,salidasTotales);
     weights_I_O = createArray(entradasTotales,salidasTotales);

        for (let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{		
			for (let j = 0; j < _entradasTotales ; j++)
			{
                weights_H_I[i][j] =     Math.random() *0.01; 
			}
		}

        for (let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{		
			for (let j = 0; j < _salidasTotales ; j++)
			{
                weights_H_O[i][j] =     Math.random() *0.01; 
               weights_H_BIAS[i] =  Math.random() *0.01; 
			}
		}

        for (let i = 0; i < _entradasTotales ; i++)
		{		
			for (let j = 0; j < _salidasTotales ; j++)
			{
                weights_I_O[i][j] =     Math.random() *0.01; 
                weights_O_BIAS[j] =     Math.random() *0.01; 
			}
		}


     //   feedForward(dataset,0);
       /* feedForward(dataset,1);
        feedForward(dataset,2);
        feedForward(dataset,3);*/
		
    }
    


   const feedForwardd = (dataset,dataset_iteration) =>
    {

      

        for (let i = 0; i <_entradasTotales; i++)
		{
			//fill input neurons with values in this iteration of dataset 
			neurons_I[i] = dataset[dataset_iteration][i];
		}

        for (let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{
            if(!neurons_H[i])
            {
                neurons_H[i] = 0;
            }

    
			for (let j = 0; j < _entradasTotales ; j++)
			{
				if(mapping_H_I[i] == 1)
				{	
                 
				neurons_H[i] += neurons_I[j] *  weights_H_I[i][j];
				}
			}
			
			neurons_H[i] += weights_H_BIAS[i];
			neurons_H[i] = Math.tanh(neurons_H[i]);
		}


       for (let i = 0; i < _salidasTotales ; i++)
		{
            if(!neurons_O[i])
            {
                neurons_O[i] = 0;
            }


			//first i_o
			for (let j = 0; j < _entradasTotales ; j++)
			{
				if(mapping_I_O[j] == 1)
				{	
					neurons_O[i] += neurons_I[j] *  weights_I_O[j][i];
				}
			}
			//then h_o
			for (let j = 0; j < _neuronasCapaOcultatotales ; j++)
			{
				if(mapping_H_O[j] == 1)
				{	
					neurons_O[i] += neurons_H[j] *  weights_H_O[j][i];
				}
			}
			
			neurons_O[i] += weights_O_BIAS[i];
			neurons_O[i] = Math.tanh(neurons_O[i]);	
				
		}

      
        console.log(neurons_I);
        console.log(neurons_O);
      

        

    //    BackPropagation(neurons_O,neurons_H, neurons_I);
    }



    const feedForward = (dataset,dataset_iteration) =>
    {

      

        for (let i = 0; i <_entradasTotales; i++)
		{
			//fill input neurons with values in this iteration of dataset 
			neurons_I[i] = dataset[dataset_iteration][i];
		}

        for (let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{
            if(!neurons_H[i])
            {
                neurons_H[i] = 0;
            }

    
			for (let j = 0; j < _entradasTotales ; j++)
			{
				if(mapping_H_I[i] == 1)
				{	
                 
				neurons_H[i] += neurons_I[j] *  weights_H_I[i][j];
				}
			}
			
			neurons_H[i] += weights_H_BIAS[i];
			neurons_H[i] = Math.tanh(neurons_H[i]);
		}


       for (let i = 0; i < _salidasTotales ; i++)
		{
            if(!neurons_O[i])
            {
                neurons_O[i] = 0;
            }


			//first i_o
			for (let j = 0; j < _entradasTotales ; j++)
			{
				if(mapping_I_O[j] == 1)
				{	
					neurons_O[i] += neurons_I[j] *  weights_I_O[j][i];
				}
			}
			//then h_o
			for (let j = 0; j < _neuronasCapaOcultatotales ; j++)
			{
				if(mapping_H_O[j] == 1)
				{	
					neurons_O[i] += neurons_H[j] *  weights_H_O[j][i];
				}
			}
			
			neurons_O[i] += weights_O_BIAS[i];
			neurons_O[i] = Math.tanh(neurons_O[i]);	
				
		}

    

        

    //    BackPropagation(neurons_O,neurons_H, neurons_I);
    }




    const BackPropagation = () =>
	{		
	
		
		for (let i = 0; i < _salidasTotales ; i++)
		{
            if(! errors_O[i])
            {
                errors_O[i] = 0;
            }

				errors_O[i] = (1 - Math.pow(neurons_O[i], 2)) * (ExpectedValue_XOR(i, neurons_I) - neurons_O[i]);
			
           //     console.log("output error_ " + i + "____" + errors_O[i]);
		}
		
		//length_H errors
	
		
		for (let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{
			
            if(! errors_H[i])
            {
                errors_H[i] = 0;
            }

			let sum_Eo_Who = 0;
			
			for (let j = 0; j < _salidasTotales ; j++)
			{
				if(mapping_H_O[i] == 1)
				{	
					sum_Eo_Who += weights_H_O[i] * errors_O[j];
				}
			}
			
           
				errors_H[i] = (1 - Math.pow(neurons_H[i], 2)) * sum_Eo_Who;
			
		//	console.log("hidden error_ " + i + "____" + errors_H[i])
			
		}
	}

    const ExpectedValue_XOR = (output ) => 
    {
        switch (output)
		{
			case 0:
			//We don't use different expected values for different OUTPUTS because there is only one.
			if(neurons_I[0] != neurons_I[1])
			{
			
          //      console.log("EXPECTED___" + 1);
				return 1;
			}
			else
			{
		//		console.log("EXPECTED___" + 0);
				return 0;
			}
			default:
				//?????????
				return 999999;
		}
    }

    const DeltaWeights = () =>
	{	
		//deltas of i_o
		for(let i = 0; i < _salidasTotales ; i++)
		{
            if(! deltas_O_BIAS[i])
            {
                deltas_O_BIAS[i] = 0;
            }
			//bias
			deltas_O_BIAS[i] += learn_factor * errors_O[i];
			
			for(let j = 0; j < _entradasTotales ; j++)
			{
                if(! deltas_I_O[j][i])
                {
                    deltas_I_O[j][i] = 0;
                }
                
				if(mapping_I_O[j] == 1)

					deltas_I_O[j][i] += learn_factor * errors_O[i] *  neurons_I[j];
			}
		}
		
		//deltas of h_o
		for(let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{
            if(! deltas_H_BIAS[i])
            {
                deltas_H_BIAS[i] = 0;
            }

			//bias
			deltas_H_BIAS[i] += learn_factor * errors_H[i];	
			for(let j = 0; j < _salidasTotales ; j++)
			{
                if(! deltas_H_O[i][j])
                {
                    deltas_H_O[i][j] = 0;
                }
                
				if(mapping_H_I[i] == 1)
					deltas_H_O[i][j] += learn_factor * errors_O[j] *  neurons_H[i];
			}
		}
		
		//deltas of i_h
		for(let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{
            
			for(let j = 0; j < _entradasTotales ; j++)
			{
                if(! deltas_H_I[i][j])
                {
                    deltas_H_I[i][j] = 0;
                }
				if(mapping_H_I[i] == 1)
					deltas_H_I[i][j] += learn_factor * errors_H[i] *  neurons_I[j];
			}
		}
	    //PrintDeltas();
	}

    




   const WeightsCorrection = () =>
	{		
		//weights of i_o
		for(let i = 0; i < _entradasTotales ; i++)
		{
			for(let j = 0; j < _salidasTotales ; j++)
			{
				if(mapping_I_O[i] == 1)
					weights_I_O[i][j] += deltas_I_O[i][j];
			}
		}
		
		//weights of h_o
		for(let i = 0; i < _salidasTotales ; i++)
		{
			//bias
			weights_O_BIAS[i] += deltas_O_BIAS[i];
			
			for(let j = 0; j < _neuronasCapaOcultatotales ; j++)
			{
				if(mapping_H_O[j] == 1)
					weights_H_O[j][i] += deltas_H_O[j][i];
			}
		}
		
		//weights of i_h
		for(let i = 0; i < _neuronasCapaOcultatotales ; i++)
		{
			//bias
			weights_H_BIAS[i] += deltas_H_BIAS[i];
			
			for(let j = 0; j < _entradasTotales ; j++)
			{
				if(mapping_H_I[i] == 1)
					weights_H_I[i][j] += deltas_H_I[i][j];
			}
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



