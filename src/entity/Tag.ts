import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Property_Tag } from "./Property_Tag";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @OneToMany(type => Property_Tag, property_tag => property_tag.tag)
    property_tags: Property_Tag[]
}