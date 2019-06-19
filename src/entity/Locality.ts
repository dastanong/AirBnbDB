import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Property } from "./Property";

@Entity()
export class Locality {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street_name: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @OneToMany(type => Property, property => property.locality)
    property: Property[]
}