import { Button } from '@/modules/core/ui/button'
import { Input } from '@/modules/core/ui/input'
import { Routes } from '@/routes'
import { LogInSchema } from '@/modules/auth/schemas'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import useLogIn from '@/modules/auth/hooks/useLogIn'
import { toast } from 'sonner'
import type { LogIn } from '../../types'
import { useErrorBoundary } from 'react-error-boundary'
import handleError from '@/errors'

export default function LogInForm() {
  const { logIn, loading } = useLogIn()
  const navigate = useNavigate()
  const { showBoundary } = useErrorBoundary()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LogIn,
    validationSchema: LogInSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const result = await logIn({
          email,
          password,
        })
        if (result?.success) navigate(Routes.home)
      } catch (error) {
        return showBoundary(error)
      }
    },
  })

  return (
    <main className="max-w-[500px] w-full bg-white p-12 rounded-[5px]">
      <div className="mb-4 flex flex-col  gap-2 items-center">
        <h1 className="text-xl font-semibold text-center">Sign in to continue</h1>
        <span className="text-sm text-center">
          Kapwing works better when you’re signed in. Sign in to save content to a workspace, share with others, and more.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 border border-neutral-800/50 rounded px-3 py-4 hover:bg-[#F0F0F0] cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            enable-background="new 0 0 48 48"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Google</title>
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          Continue with Google
        </div>
        <div className="flex gap-4 border border-neutral-800/50 rounded px-3 py-4 hover:bg-[#F0F0F0] cursor-pointer">
          <svg
            stroke="currentColor"
            fill="#4E69A1"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook</title>
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
          Continue with Facebook
        </div>
      </div>
      <div className="text-center py-2 font-bold">
        <span>or</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Input Email */}
        <label className="flex flex-col gap-1">
          <span>Correo</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
            placeholder="email@gmail.com"
            type="email"
            required
          />
          {formik.touched.email && <span className="border-primary text-primary">{formik.errors.email}</span>}
        </label>
        {/* Input Email */}

        {/* Input Password */}
        <label className="flex flex-col gap-1">
          <span>Password</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
            placeholder="****************"
            type="password"
            required
          />
          {formik.touched.password && <span className="border-primary text-primary">{formik.errors.password}</span>}
        </label>
        {/* Input Password */}

        <Button loading={loading} type="submit" className="">
          Ingresar
        </Button>
        <div className="flex gap-1">
          <p>¿No tienes una cuenta?</p>
          <Link className="underline" to={Routes.signUp}>
            Crear cuenta
          </Link>
        </div>
      </form>
    </main>
  )
}
