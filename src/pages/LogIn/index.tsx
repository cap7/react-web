import React, { useEffect, useContext } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Creators as actionLogIn } from "../../domain/useCases/logInUseCase"
import { useForm, SubmitHandler } from "react-hook-form"
import { LockClosedIcon } from "@heroicons/react/solid"
import { MainContext } from "../../context/MainProvider"
import { ContextTypes } from "../../context/MainReducer"
import { useNavigate } from "react-router-dom"

interface Props {
  dispatch: Dispatch
  data: any
  isLoggedIn: boolean
}

type FormLogIn = {
  user: string
  password: string
}

const LoginViewController: React.FC<Props> = (props) => {
  const { register, handleSubmit } = useForm<FormLogIn>()
  const { dispatchContext } = useContext(MainContext)
  const navigate = useNavigate()

  const { data, isLoggedIn, dispatch } = props

  useEffect(() => {
    if (isLoggedIn) {
      dispatchContext({
        type: ContextTypes.auth,
        access: true,
        codigo: data.codigo,
        nombre: data.nombre,
      })
      navigate("/")
    }
  }, [data])

  const onLogin: SubmitHandler<FormLogIn> = (data) => {
    dispatch(actionLogIn.logIn(data.user, data.password))
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Neox
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onLogin)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Ingrese su usuario"
                {...register("user", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Ingrese su contraseña"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Ingrese
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    data: state.auth.data,
    isLoggedIn: state.auth.isLoggedIn,
  }
}

export default connect(mapStateToProps)(LoginViewController)
