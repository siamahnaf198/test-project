import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsString, IsNotEmpty } from "class-validator";

@InputType()
class Avatar {
    @Field(() => String, { nullable: false })
    @IsString()
    @IsNotEmpty()
    public_key: string;

    @Field(() => String, { nullable: false })
    @IsString()
    @IsNotEmpty()
    url: string;
}

@InputType()
export class LoginInput {
    @Field(() => String, { nullable: false })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Field(() => String, { nullable: false })
    @IsString()
    @IsNotEmpty()
    password: string;
}