import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Owner } from "./Owner";
import { Booking } from "./Booking";
import { Property_Tag } from "./Property_Tag";
import { Review } from "./Review";
import { Locality } from "./Locality";

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(type => Owner, owner => owner.property)
    @JoinColumn({name: "owner_id"})
    owner: Owner[]

    @OneToMany(type => Booking, booking => booking.property)
    bookings: Booking[]

    @OneToMany(type => Property_Tag, property_tag => property_tag.property)
    property_tags: Property_Tag[]

    @OneToMany(type => Review, review => review.property)
    reviews: Review[]

    @ManyToOne(type => Locality, locality => locality.property)
    @JoinColumn({name: "locality_id"})
    locality: Locality[]
}