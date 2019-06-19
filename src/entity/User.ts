import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";
import { Review } from "./Review";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: string;

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @OneToMany(type => Booking, booking => booking.user)
    bookings: Booking[]

    @OneToMany(type => Review, review => review.user)
    reviews: Review[]
}
