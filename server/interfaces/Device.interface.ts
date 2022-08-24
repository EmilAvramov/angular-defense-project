import {
	InferAttributes,
	InferCreationAttributes,
	Model,
} from 'sequelize/types';

export interface Brand
	extends Model<InferAttributes<Brand>, InferCreationAttributes<Brand>> {
	brandId: number;
	brandName: string;
	key: string;
}

export interface Device
	extends Model<InferAttributes<Device>, InferCreationAttributes<Device>> {
	deviceId: number;
	deviceName: string;
	deviceType: string;
	deviceImage: string;
	key: string;
}