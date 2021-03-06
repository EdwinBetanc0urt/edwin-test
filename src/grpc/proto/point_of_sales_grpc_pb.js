// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Yamel Senih ysenih@erpya.com                                     *
// This program is free software: you can redistribute it and/or modify             *
// it under the terms of the GNU General Public License as published by             *
// the Free Software Foundation, either version 2 of the License, or                *
// (at your option) any later version.                                              *
// This program is distributed in the hope that it will be useful,                  *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program.	If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_point_of_sales_pb = require('../proto/point_of_sales_pb.js');
var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_client_pb = require('../proto/client_pb.js');

function serialize_data_CreateOrderLineRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateOrderLineRequest)) {
    throw new Error('Expected argument of type data.CreateOrderLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateOrderLineRequest(buffer_arg) {
  return proto_point_of_sales_pb.CreateOrderLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateOrderRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type data.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateOrderRequest(buffer_arg) {
  return proto_point_of_sales_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreatePaymentRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreatePaymentRequest)) {
    throw new Error('Expected argument of type data.CreatePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreatePaymentRequest(buffer_arg) {
  return proto_point_of_sales_pb.CreatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteOrderLineRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteOrderLineRequest)) {
    throw new Error('Expected argument of type data.DeleteOrderLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteOrderLineRequest(buffer_arg) {
  return proto_point_of_sales_pb.DeleteOrderLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteOrderRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteOrderRequest)) {
    throw new Error('Expected argument of type data.DeleteOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteOrderRequest(buffer_arg) {
  return proto_point_of_sales_pb.DeleteOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeletePaymentRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeletePaymentRequest)) {
    throw new Error('Expected argument of type data.DeletePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeletePaymentRequest(buffer_arg) {
  return proto_point_of_sales_pb.DeletePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Empty(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty(buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetKeyLayoutRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetKeyLayoutRequest)) {
    throw new Error('Expected argument of type data.GetKeyLayoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetKeyLayoutRequest(buffer_arg) {
  return proto_point_of_sales_pb.GetKeyLayoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetOrderRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetOrderRequest)) {
    throw new Error('Expected argument of type data.GetOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetOrderRequest(buffer_arg) {
  return proto_point_of_sales_pb.GetOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetProductPriceRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetProductPriceRequest)) {
    throw new Error('Expected argument of type data.GetProductPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetProductPriceRequest(buffer_arg) {
  return proto_point_of_sales_pb.GetProductPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_KeyLayout(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.KeyLayout)) {
    throw new Error('Expected argument of type data.KeyLayout');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_KeyLayout(buffer_arg) {
  return proto_point_of_sales_pb.KeyLayout.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrderLinesRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrderLinesRequest)) {
    throw new Error('Expected argument of type data.ListOrderLinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrderLinesRequest(buffer_arg) {
  return proto_point_of_sales_pb.ListOrderLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrderLinesResponse(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrderLinesResponse)) {
    throw new Error('Expected argument of type data.ListOrderLinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrderLinesResponse(buffer_arg) {
  return proto_point_of_sales_pb.ListOrderLinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrdersRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrdersRequest)) {
    throw new Error('Expected argument of type data.ListOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrdersRequest(buffer_arg) {
  return proto_point_of_sales_pb.ListOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrdersResponse(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrdersResponse)) {
    throw new Error('Expected argument of type data.ListOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrdersResponse(buffer_arg) {
  return proto_point_of_sales_pb.ListOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPaymentsRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPaymentsRequest)) {
    throw new Error('Expected argument of type data.ListPaymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentsRequest(buffer_arg) {
  return proto_point_of_sales_pb.ListPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPaymentsResponse(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPaymentsResponse)) {
    throw new Error('Expected argument of type data.ListPaymentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentsResponse(buffer_arg) {
  return proto_point_of_sales_pb.ListPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPointOfSalesRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPointOfSalesRequest)) {
    throw new Error('Expected argument of type data.ListPointOfSalesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPointOfSalesRequest(buffer_arg) {
  return proto_point_of_sales_pb.ListPointOfSalesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPointOfSalesResponse(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPointOfSalesResponse)) {
    throw new Error('Expected argument of type data.ListPointOfSalesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPointOfSalesResponse(buffer_arg) {
  return proto_point_of_sales_pb.ListPointOfSalesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductPriceRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListProductPriceRequest)) {
    throw new Error('Expected argument of type data.ListProductPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductPriceRequest(buffer_arg) {
  return proto_point_of_sales_pb.ListProductPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductPriceResponse(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListProductPriceResponse)) {
    throw new Error('Expected argument of type data.ListProductPriceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductPriceResponse(buffer_arg) {
  return proto_point_of_sales_pb.ListProductPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Order(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.Order)) {
    throw new Error('Expected argument of type data.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Order(buffer_arg) {
  return proto_point_of_sales_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_OrderLine(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.OrderLine)) {
    throw new Error('Expected argument of type data.OrderLine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_OrderLine(buffer_arg) {
  return proto_point_of_sales_pb.OrderLine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Payment(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.Payment)) {
    throw new Error('Expected argument of type data.Payment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Payment(buffer_arg) {
  return proto_point_of_sales_pb.Payment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PointOfSales(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PointOfSales)) {
    throw new Error('Expected argument of type data.PointOfSales');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PointOfSales(buffer_arg) {
  return proto_point_of_sales_pb.PointOfSales.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PointOfSalesRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PointOfSalesRequest)) {
    throw new Error('Expected argument of type data.PointOfSalesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PointOfSalesRequest(buffer_arg) {
  return proto_point_of_sales_pb.PointOfSalesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProcessOrderRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ProcessOrderRequest)) {
    throw new Error('Expected argument of type data.ProcessOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProcessOrderRequest(buffer_arg) {
  return proto_point_of_sales_pb.ProcessOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProductPrice(arg) {
  if (!(arg instanceof proto_core_functionality_pb.ProductPrice)) {
    throw new Error('Expected argument of type data.ProductPrice');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProductPrice(buffer_arg) {
  return proto_core_functionality_pb.ProductPrice.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateOrderLineRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateOrderLineRequest)) {
    throw new Error('Expected argument of type data.UpdateOrderLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateOrderLineRequest(buffer_arg) {
  return proto_point_of_sales_pb.UpdateOrderLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateOrderRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateOrderRequest)) {
    throw new Error('Expected argument of type data.UpdateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateOrderRequest(buffer_arg) {
  return proto_point_of_sales_pb.UpdateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdatePaymentRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdatePaymentRequest)) {
    throw new Error('Expected argument of type data.UpdatePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdatePaymentRequest(buffer_arg) {
  return proto_point_of_sales_pb.UpdatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ValidatePINRequest(arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ValidatePINRequest)) {
    throw new Error('Expected argument of type data.ValidatePINRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ValidatePINRequest(buffer_arg) {
  return proto_point_of_sales_pb.ValidatePINRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// 	POS Service used for ADempiere integration 
var StoreService = exports.StoreService = {
  // 	Get POS Definition
getPointOfSales: {
    path: '/data.Store/GetPointOfSales',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.PointOfSalesRequest,
    responseType: proto_point_of_sales_pb.PointOfSales,
    requestSerialize: serialize_data_PointOfSalesRequest,
    requestDeserialize: deserialize_data_PointOfSalesRequest,
    responseSerialize: serialize_data_PointOfSales,
    responseDeserialize: deserialize_data_PointOfSales,
  },
  // 	List Point of Sales
listPointOfSales: {
    path: '/data.Store/ListPointOfSales',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListPointOfSalesRequest,
    responseType: proto_point_of_sales_pb.ListPointOfSalesResponse,
    requestSerialize: serialize_data_ListPointOfSalesRequest,
    requestDeserialize: deserialize_data_ListPointOfSalesRequest,
    responseSerialize: serialize_data_ListPointOfSalesResponse,
    responseDeserialize: deserialize_data_ListPointOfSalesResponse,
  },
  // 	Get Product Price from Code / UPC / Name
getProductPrice: {
    path: '/data.Store/GetProductPrice',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetProductPriceRequest,
    responseType: proto_core_functionality_pb.ProductPrice,
    requestSerialize: serialize_data_GetProductPriceRequest,
    requestDeserialize: deserialize_data_GetProductPriceRequest,
    responseSerialize: serialize_data_ProductPrice,
    responseDeserialize: deserialize_data_ProductPrice,
  },
  // 	List Product Price
listProductPrice: {
    path: '/data.Store/ListProductPrice',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListProductPriceRequest,
    responseType: proto_point_of_sales_pb.ListProductPriceResponse,
    requestSerialize: serialize_data_ListProductPriceRequest,
    requestDeserialize: deserialize_data_ListProductPriceRequest,
    responseSerialize: serialize_data_ListProductPriceResponse,
    responseDeserialize: deserialize_data_ListProductPriceResponse,
  },
  // 	Create Order
createOrder: {
    path: '/data.Store/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_CreateOrderRequest,
    requestDeserialize: deserialize_data_CreateOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order,
  },
  // 	Delete Order
deleteOrder: {
    path: '/data.Store/DeleteOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteOrderRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteOrderRequest,
    requestDeserialize: deserialize_data_DeleteOrderRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // 	Create Order Line
createOrderLine: {
    path: '/data.Store/CreateOrderLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateOrderLineRequest,
    responseType: proto_point_of_sales_pb.OrderLine,
    requestSerialize: serialize_data_CreateOrderLineRequest,
    requestDeserialize: deserialize_data_CreateOrderLineRequest,
    responseSerialize: serialize_data_OrderLine,
    responseDeserialize: deserialize_data_OrderLine,
  },
  // 	Delete Order Line
deleteOrderLine: {
    path: '/data.Store/DeleteOrderLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteOrderLineRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteOrderLineRequest,
    requestDeserialize: deserialize_data_DeleteOrderLineRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // 	Update Order
updateOrder: {
    path: '/data.Store/UpdateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_UpdateOrderRequest,
    requestDeserialize: deserialize_data_UpdateOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order,
  },
  // 	Update Order Line
updateOrderLine: {
    path: '/data.Store/UpdateOrderLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateOrderLineRequest,
    responseType: proto_point_of_sales_pb.OrderLine,
    requestSerialize: serialize_data_UpdateOrderLineRequest,
    requestDeserialize: deserialize_data_UpdateOrderLineRequest,
    responseSerialize: serialize_data_OrderLine,
    responseDeserialize: deserialize_data_OrderLine,
  },
  // 	Get a Order
getOrder: {
    path: '/data.Store/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_GetOrderRequest,
    requestDeserialize: deserialize_data_GetOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order,
  },
  // 	List Orders
listOrders: {
    path: '/data.Store/ListOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListOrdersRequest,
    responseType: proto_point_of_sales_pb.ListOrdersResponse,
    requestSerialize: serialize_data_ListOrdersRequest,
    requestDeserialize: deserialize_data_ListOrdersRequest,
    responseSerialize: serialize_data_ListOrdersResponse,
    responseDeserialize: deserialize_data_ListOrdersResponse,
  },
  // 	List Order Lines
listOrderLines: {
    path: '/data.Store/ListOrderLines',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListOrderLinesRequest,
    responseType: proto_point_of_sales_pb.ListOrderLinesResponse,
    requestSerialize: serialize_data_ListOrderLinesRequest,
    requestDeserialize: deserialize_data_ListOrderLinesRequest,
    responseSerialize: serialize_data_ListOrderLinesResponse,
    responseDeserialize: deserialize_data_ListOrderLinesResponse,
  },
  // 	Get a Key Layout
getKeyLayout: {
    path: '/data.Store/GetKeyLayout',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetKeyLayoutRequest,
    responseType: proto_point_of_sales_pb.KeyLayout,
    requestSerialize: serialize_data_GetKeyLayoutRequest,
    requestDeserialize: deserialize_data_GetKeyLayoutRequest,
    responseSerialize: serialize_data_KeyLayout,
    responseDeserialize: deserialize_data_KeyLayout,
  },
  // 	Payments
// 	Create Payment
createPayment: {
    path: '/data.Store/CreatePayment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreatePaymentRequest,
    responseType: proto_point_of_sales_pb.Payment,
    requestSerialize: serialize_data_CreatePaymentRequest,
    requestDeserialize: deserialize_data_CreatePaymentRequest,
    responseSerialize: serialize_data_Payment,
    responseDeserialize: deserialize_data_Payment,
  },
  // 	Update Payment
updatePayment: {
    path: '/data.Store/UpdatePayment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdatePaymentRequest,
    responseType: proto_point_of_sales_pb.Payment,
    requestSerialize: serialize_data_UpdatePaymentRequest,
    requestDeserialize: deserialize_data_UpdatePaymentRequest,
    responseSerialize: serialize_data_Payment,
    responseDeserialize: deserialize_data_Payment,
  },
  // 	Delete Payment
deletePayment: {
    path: '/data.Store/DeletePayment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeletePaymentRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeletePaymentRequest,
    requestDeserialize: deserialize_data_DeletePaymentRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // 	List Payments
listPayments: {
    path: '/data.Store/ListPayments',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListPaymentsRequest,
    responseType: proto_point_of_sales_pb.ListPaymentsResponse,
    requestSerialize: serialize_data_ListPaymentsRequest,
    requestDeserialize: deserialize_data_ListPaymentsRequest,
    responseSerialize: serialize_data_ListPaymentsResponse,
    responseDeserialize: deserialize_data_ListPaymentsResponse,
  },
  // 	Process Order
processOrder: {
    path: '/data.Store/ProcessOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ProcessOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_ProcessOrderRequest,
    requestDeserialize: deserialize_data_ProcessOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order,
  },
  // 	Validate PIN
validatePIN: {
    path: '/data.Store/ValidatePIN',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ValidatePINRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_ValidatePINRequest,
    requestDeserialize: deserialize_data_ValidatePINRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
};

exports.StoreClient = grpc.makeGenericClientConstructor(StoreService);
