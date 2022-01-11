export {agregar_iva_nomina_empresa_magica_2022, descontarAFP as descontar, IVA}
const IVA=0.19;

function agregar_iva_nomina_empresa_magica_2022(monto){
    return monto*1.19;
}

function descontarAFP(monto){
    return monto-(monto*0.1);
}