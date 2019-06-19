import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Tag } from "./Tag";
import { Property } from "./Property";

@Entity()
export class Property_Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Tag, tag => tag.property_tags)
    @JoinColumn({name: "tag_id"})
    tag: Tag[]

    @ManyToOne(type => Property, property => property.property_tags)
    @JoinColumn({name: "property_id"})
    property: Property[]
}