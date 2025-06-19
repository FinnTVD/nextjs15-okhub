"use server";

import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const logoutForm = async (redirectTo?: string) => {
	await signOut({
		redirectTo,
		redirect: true,
	});
	revalidatePath("/");
};