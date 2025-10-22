const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//motor de vistas
app.set('view engine', 'ejs');

app.get('/i', (req, res) => {
  res.render('inicio', {
    titulo: 'Página de Inicio',
    mensaje: 'Bienvenido a nuestra tienda en línea'
  });
});

app.get('/',(req,res)=>{  
    res.render('index', {
    titulo: 'Productos',
    mensaje: 'Productos disponibles en la tienda',
    productos: [
      { nombre: 'Producto 1', precio: 10.99 },
      { nombre: 'Producto 2', precio: 19.99 },
      { nombre: 'Producto 3', precio: 5.49 },
    ]
  });
 });

 app.get('/inicio', (req, res) => {
  const productos = [
    {
      nombre: 'Audífonos Bluetooth',
      descripcion: 'Sonido de alta calidad y cancelación de ruido.',
      precio: 899.99,
      imagen: 'https://picsum.photos/200'
    },
    {
      nombre: 'Smartwatch Pro',
      descripcion: 'Controla tu salud y recibe notificaciones.',
      precio: 1299.50,
      imagen: 'https://picsum.photos/200?2'
    },
    {
      nombre: 'Cámara 4K',
      descripcion: 'Captura tus momentos con resolución ultra HD.',
      precio: 4999.00,
      imagen: 'https://picsum.photos/200?3'
    }
  ];
  res.render('inicio', { productos });
});


app.listen(port, () => {
  console.log('Servidor inicializado en http://localhost:' + port);
});