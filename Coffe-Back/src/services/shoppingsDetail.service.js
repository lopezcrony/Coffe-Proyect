        const shoppingDetailRepository = require('../repository/shoppingsDetail.repository');
        const productRepository = require('../repository/products.repository');
        const shoppingRepository = require('../repository/shoppingsDetail.repository');
        const { sequelize } = require('../config/dataBase');
        
        
        
        const getAllShoppingDetailsByShopping = async (idCompra) => {
            try {
                return await shoppingDetailRepository.findAllShoppinDetailsByShopping(idCompra);
            } catch (error) {
                throw error;
            }
        };
        
        const getAllShoppingDetails = async () => {
            try {
                return await shoppingDetailRepository.findAllShoppingDetails();
            } catch (error) {
                throw error;
            }
        };
        
        const getOneShoppingDetail = async (id) => {
            try {
                return await shoppingDetailRepository.findShoppingDetailById(id);
            } catch (error) {
                throw error;
            }
        };
        
        const createShoppingDetail = async (shoppingdetailData) => {
            const transaction = await sequelize.transaction();
            try {
        
                const shopping = await shoppingRepository.findShoppingById(shoppingdetailData.idCompra, { transaction });
                if(!shopping) throw new Error('SERVICE: No se encontró la compra.');
        
        
                const existingDetail = await shoppingDetailRepository.findShoppingDetailByCompraAndProducto(
                    shoppingdetailData.idCompra, 
                    shoppingdetailData.idProducto
                );
        
                if (existingDetail) {
                    throw new Error('Ya existe un detalle de compra con este producto');
                }
                const newShoppingDetail = await shoppingDetailRepository.createShoppingDetail(shoppingdetailData,{ transaction });
               
                const subtotal = shoppingdetailData.cantidadProducto * shoppingdetailData.precioCompraUnidad;
                // Se actualiza / incrementa el valor total de la compra
                shopping.valorCompra += subtotal;
                await shopping.save({ transaction })
        
                
                product = await productRepository.findProductById(shoppingdetailData.idProducto)
                // Se actualiza el stock del producto
                const newStock = product.stock + shoppingdetailData.cantidadProducto;
                await productRepository.updateProductoStock(product.idProducto, newStock, { transaction });
        
                await transaction.commit();
                return newShoppingDetail;
            } catch (error) {
                  //Deshace todo
                await transaction.rollback();
                throw new Error('SERVICE:' + error.message);
            }
        };
        
        
        const updateShoppingDetail = async (id, ShoppingdetailData) => {
            try {
                const result = await shoppingDetailRepository.updateShoppingDetail(id, ShoppingdetailData);
                if (!result) {
                    throw new Error('SERVICE: No se pudo actualizar la información del detalle de la compra.');
                }
            } catch (error) {
                if (error.name === 'SequelizeUniqueConstraintError') {
                    throw new Error('El detalle ya esta registrado.');
                }
                throw error;
            }
        };
        
        
        const deleteOneShoppingDetail = async (id) => {
            try {
                const result = await shoppingDetailRepository.deleteShoppingDetail(id);
                if (result === 0) {
                    throw new Error('Detalle de la compra no encontrado');
                }
                return result;
            } catch (error) {
                throw error;
            }
        };
        
        
        module.exports = {
            getAllShoppingDetails,
            getOneShoppingDetail,
            createShoppingDetail,
            updateShoppingDetail,
            deleteOneShoppingDetail,
            getAllShoppingDetailsByShopping
        };
        