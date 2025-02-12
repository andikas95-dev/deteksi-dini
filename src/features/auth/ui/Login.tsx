'use client';
import {
  LogoDeteksiDiniPrimary,
  LogoDeteksiDiniWhite,
} from '@/components/assets/icons';
import InputForm from '@/components/form/input-form';
import InputPasswordForm from '@/components/form/input-password-form';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Button } from '@/components/ui/button';
import { RESET } from '@/helpers/constants/path';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from "sonner"


function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });
  const session: any = useSession();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log(data);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if(!result?.ok){
      toast.error("Email atau Password Anda Salah", {
        position: "top-center",
        duration: 2000
      })
    }
    console.log("🚀 ~ onSubmit ~ result:", result)
  };

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ session:", session)
    if(session?.data?.user?.role == 'user'){
      router.replace("/")
    }
    if(session?.data?.user?.role == 'admin'){
      router.replace("/ap/dashboard")
    }
  }, [session, router]);

  return (
    <LayoutRoot className="px-4" bottomNavOnly>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 justify-center pt-18"
        >
          <div className="py-8">
            <LogoDeteksiDiniPrimary width={400} className="mx-auto w-full" />
          </div>
          <InputForm name="email" label="Email" placeholder="Email" />
          <InputPasswordForm
            name="password"
            label="Password"
            placeholder="Masukkan password"
          />
          {/* <Link
            href={RESET}
            className="self-end hover:text-primary focus:underline"
          >
            Lupa Password
          </Link> */}
          <div className="flex flex-col gap-3">
            <Button type="submit">Masuk</Button>
            {/* <Link href="/register">
              <Button type="button" variant="secondary" className="w-full">
                Daftar
              </Button>
            </Link> */}
          </div>
        </form>
      </FormProvider>
    </LayoutRoot>
  );
}

export default Login;
