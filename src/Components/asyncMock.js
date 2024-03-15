const products = [
    {
      id: 1,
      title: 'Kawasaki Ninja',
      price: '10000',
      category: 'deportivas',
      description: 'Cilindrada: Alta, Ruta',
      image:
        'https://www.formulamoto.es/wp-content/uploads/2021/10/hi_22MY_Ninja_650_WT1_STU__1_-150x150.jpg',
    },
    {
      id: 2,
      title: 'Ktm Adventure',
      price: '12000',
      category: 'Trial',
      description: 'Cilindrada: Media, Viaje',
      image:
        'https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2022/12/KTM-1290-Super-Adventure-S-2023-colores-2-150x150.jpg',
    },
    {
      id: 3,
      title: 'Yamaha',
      price: '5000',
      category: 'Naked',
      description: 'Cilindrada: Baja, Ciudad',
      image:
        'https://www.hengmotor.com//image/cache/catalog/slicing/New%20Bikes/Yamaha/YZF%20R1/Yamaha%20Blue-150x150.jpg',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  