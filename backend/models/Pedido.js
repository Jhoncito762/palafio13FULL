import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
    },
    cliente: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
    },
    cantidad: { // Nueva columna para la cantidad
        type: Number,
        required: true,
        default: 1,
    },
    total: { // Nueva columna para el total
        type: Number,
        required: true,
    },
    
    
    
    
}, {
    timestamps: true,
});

const Pedido = mongoose.model("Pedidos", pedidoSchema);

export default Pedido;
