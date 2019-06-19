import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Property } from "./Property";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column()
    rating: number;

    @ManyToOne(type => User, user => user.reviews)
    @JoinColumn({name: "user_id"})
    user: User[]

    @ManyToOne(type => Property, property => property.reviews)
    @JoinColumn({name: "property_id"})
    property: Property[]
}