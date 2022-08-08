import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { MainContext } from "../../context/MainProvider"
import { ContextTypes } from "../../context/MainReducer"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/solid"
import Config from "Config"
import HeaderForm from "./components/HeaderForm"
import VitalSigns from "./forms/VitalSigns"
import WeightHeight from "./forms/WeightHeight"
import ButtonForm from "./components/ButtonForm"
import MessageForm from "./components/Message"
import MenuForm from "./components/MenuForm"
import { Spinner } from "../../components"
import { Creators as actionSaveWeightHeight } from "../../domain/useCases/saveWeightHeightUseCase"
import { Creators as actionUpdateWeightHeight } from "../../domain/useCases/updateWeightHeightUseCase"
import { Creators as actionListWeightHeight } from "../../domain/useCases/listWeightHeightUseCase"
import { Creators as actionSaveVitalSigs } from "../../domain/useCases/saveVitalSignsUseCase"
import { Creators as actionUpdateVitalSigs } from "../../domain/useCases/updateVitalSignsUseCase"
import { Creators as actionListVitalSigs } from "../../domain/useCases/listVitalSignsUseCase"

interface Props {
  dispatch: Dispatch
  listMenu: any
  isLoadingListMenu: boolean
  listVitalSigns: any
  listWeightHeight: any
  saveVitalSigns: any
  saveWeightHeight: any
  updateVitalSigns: any
  updateWeightHeight: any
  user: any
}

const TakeOrderViewController: React.FC<Props> = (props) => {
  const {
    dispatch,
    listMenu,
    isLoadingListMenu,
    listVitalSigns,
    listWeightHeight,
    saveVitalSigns,
    saveWeightHeight,
    updateVitalSigns,
    updateWeightHeight,
    user,
  } = props
  const { stateContext, dispatchContext } = useContext(MainContext)
  const [stateSelectForm, setStateSelectForm] = useState<string>("NO_SELECT")
  const [stateVitalSigns, setStateVitalSigns] = useState<any>(null)
  const [stateWeightHeight, setStateWeightHeight] = useState<any>(null)
  const [stateFormDisabled, setStateFormDisabled] = useState<boolean>(true)
  const [stateFormClean, setStateFormClean] = useState<boolean>(false)
  const [stateFormSave, setStateFormSave] = useState<boolean>(false)
  const [stateFormEdit, setStateFormEdit] = useState<boolean>(false)
  const [stateDisabledNew, setStateDisabledNew] = useState<boolean>(true)
  const [stateDisabledSave, setStateDisabledSave] = useState<boolean>(true)
  const [stateDisabledEdit, setStateDisabledEdit] = useState<boolean>(true)

  const stateButton = (btnNew: boolean, btnSave: boolean, btnEdit: boolean) => {
    setStateDisabledNew(btnNew)
    setStateDisabledSave(btnSave)
    setStateDisabledEdit(btnEdit)
  }

  const onClear = () => {
    dispatch(actionSaveVitalSigs.saveVitalSignsClear())
    dispatch(actionUpdateVitalSigs.updateVitalSignsClear())
    dispatch(actionListVitalSigs.listVitalSignsClear())
    dispatch(actionSaveWeightHeight.saveWeightHeightClear())
    dispatch(actionUpdateWeightHeight.updateWeightHeightClear())
    dispatch(actionListWeightHeight.listWeightHeightClear())
  }

  const onSaveWeightHeight = (
    size: string,
    weight: string,
    imc: string,
    waist: string,
    hip: string,
    chestPerimeterInspiration: string,
    chestPerimeterExpiration: string,
    waistHip: string,
    nutritionalDiagnosis: string,
    observations: string
  ) => {
    setStateFormSave(false)
    if (stateFormEdit) {
      setStateFormEdit(false)
      dispatch(
        actionUpdateWeightHeight.updateWeightHeight(
          true,
          stateContext.takeOrder.order,
          stateSelectForm,
          size,
          weight,
          imc,
          waist,
          hip,
          chestPerimeterInspiration,
          chestPerimeterExpiration,
          waistHip,
          nutritionalDiagnosis,
          observations,
          user.codigo
        )
      )
    } else {
      dispatch(
        actionSaveWeightHeight.saveWeightHeight(
          true,
          stateContext.takeOrder.order,
          stateSelectForm,
          size,
          weight,
          imc,
          waist,
          hip,
          chestPerimeterInspiration,
          chestPerimeterExpiration,
          waistHip,
          nutritionalDiagnosis,
          observations,
          user.codigo
        )
      )
    }
  }

  const onListWeightHeight = () => {
    dispatch(
      actionListWeightHeight.listWeightHeight(
        true,
        stateContext.takeOrder.order
      )
    )
  }

  const onCloseTakeOrder = () => {
    onClear()
    setStateSelectForm("")
    dispatchContext({
      type: ContextTypes.takeOrder,
      show: false,
    })
  }

  const onSaveVitalSigns = (
    temperature: string,
    pulse: string,
    breathing: string,
    systolicPressure: string,
    diastolicPressure: string,
    halfPressure: string,
    heartRate: string,
    saturation: string,
    observations: string
  ) => {
    setStateFormSave(false)
    if (stateFormEdit) {
      setStateFormEdit(false)

      dispatch(
        actionUpdateVitalSigs.updateVitalSigns(
          true,
          stateContext.takeOrder.order,
          stateSelectForm,
          temperature,
          pulse,
          breathing,
          systolicPressure,
          diastolicPressure,
          halfPressure,
          heartRate,
          saturation,
          observations,
          user.codigo
        )
      )
    } else {
      dispatch(
        actionSaveVitalSigs.saveVitalSigns(
          true,
          stateContext.takeOrder.order,
          stateSelectForm,
          temperature,
          pulse,
          breathing,
          systolicPressure,
          diastolicPressure,
          halfPressure,
          heartRate,
          saturation,
          observations,
          user.codigo
        )
      )
    }
  }

  const onListVitalSigns = () => {
    dispatch(
      actionListVitalSigs.listVitalSigns(true, stateContext.takeOrder.order)
    )
  }

  const selectFormFromMenu = (codForm: string) => {
    setStateSelectForm(codForm)
  }

  const onClickNew = () => {
    setStateFormClean(true)
    setStateFormDisabled(false)
    stateButton(true, false, true)
  }
  const onClickSave = () => {
    setStateFormSave(true)
    setStateFormDisabled(true)
    stateButton(true, true, false)
  }
  const onClickEdit = () => {
    stateButton(true, false, true)
    setStateFormDisabled(false)
    setStateFormEdit(true)
  }

  const formInit = () => {
    setStateFormClean(false)
    setStateFormDisabled(true)
  }

  const onChangeForm = (selectCodform: string) => {
    switch (selectCodform) {
      case Config.codForm.form1:
        return (
          <WeightHeight
            data={stateWeightHeight}
            onSave={onSaveWeightHeight}
            formDisabled={stateFormDisabled}
            formInit={formInit}
            formClean={stateFormClean}
            formSave={stateFormSave}
            stateButton={stateButton}
            responseSave={saveWeightHeight}
            responseUpdate={updateWeightHeight}
          />
        )

      case Config.codForm.form2:
        return (
          <VitalSigns
            data={stateVitalSigns}
            onSave={onSaveVitalSigns}
            formDisabled={stateFormDisabled}
            formInit={formInit}
            formClean={stateFormClean}
            formSave={stateFormSave}
            stateButton={stateButton}
            responseSave={saveVitalSigns}
            responseUpdate={updateVitalSigns}
          />
        )
      default:
        return <></>
    }
  }

  useEffect(() => {
    if (listMenu) {
      stateSelectForm === "NO_SELECT" &&
        setStateSelectForm(listMenu[0].detalle[0].codigo)
      onListVitalSigns()
      onListWeightHeight()
    }
  }, [listMenu])

  useEffect(() => {
    listVitalSigns &&
      listVitalSigns.length !== 0 &&
      setStateVitalSigns(listVitalSigns)
  }, [listVitalSigns])

  useEffect(() => {
    listWeightHeight &&
      listWeightHeight.length !== 0 &&
      setStateWeightHeight(listWeightHeight)
  }, [listWeightHeight])

  const listenAfterShowMessage = () => {
    onClear()
  }

  const messageSaveVitalSigns = () => {
    return (
      <MessageForm
        data={saveVitalSigns}
        listenAfterShowMessage={listenAfterShowMessage}
      />
    )
  }

  const messageSaveWeightHeight = () => {
    return (
      <MessageForm
        data={saveWeightHeight}
        listenAfterShowMessage={listenAfterShowMessage}
      />
    )
  }

  const messageUpdateVitalSigns = () => {
    return (
      <MessageForm
        data={updateVitalSigns}
        listenAfterShowMessage={listenAfterShowMessage}
      />
    )
  }

  const messageUpdateWeightHeight = () => {
    return (
      <MessageForm
        data={updateWeightHeight}
        listenAfterShowMessage={listenAfterShowMessage}
      />
    )
  }

  const callbackMessage = useCallback(() => {
    if (saveVitalSigns) {
      return messageSaveVitalSigns()
    }

    if (updateVitalSigns) {
      return messageUpdateVitalSigns()
    }

    if (saveWeightHeight) {
      return messageSaveWeightHeight()
    }

    if (updateWeightHeight) {
      return messageUpdateWeightHeight()
    }
  }, [saveVitalSigns, updateVitalSigns, saveWeightHeight, updateWeightHeight])

  return (
    <Transition.Root show={stateContext.takeOrder.show} as={Fragment}>
      <Dialog as="div" className="relative z-10  " onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <>{callbackMessage()}</>
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg overflow-hidden shadow-xl transition-all px-2 pt-5 pb-4  mx-5 w-screen">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onCloseTakeOrder}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <HeaderForm
                    order={stateContext.takeOrder.orderVal}
                    patient={stateContext.takeOrder.patient}
                    age={stateContext.takeOrder.age}
                    ocupation={stateContext.takeOrder.ocupation}
                    plan={stateContext.takeOrder.plan}
                    evaluation={stateContext.takeOrder.evaluation}
                  />
                  {isLoadingListMenu ? (
                    <div className="flex justify-center items-center w-full h-96">
                      <Spinner />
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <MenuForm
                        listMenu={listMenu}
                        selectForm={selectFormFromMenu}
                        stateSelectForm={stateSelectForm}
                      />
                      <div className="flex-auto bg-gray-100 px-8 py-6">
                        <div className="flex flex-row">
                          <div className="flex-auto">
                            {onChangeForm(stateSelectForm)}
                          </div>
                          <div className="pl-8">
                            <ButtonForm
                              disabledNew={stateDisabledNew}
                              disabledSave={stateDisabledSave}
                              disabledEdit={stateDisabledEdit}
                              onClickNew={onClickNew}
                              onClickSave={onClickSave}
                              onClickEdit={onClickEdit}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

function mapStateToProps(state: any) {
  return {
    user: state.auth.data,
    listMenu: state.takeOrderListMenu.data,
    isLoadingListMenu: state.takeOrderListMenu.isLoading,
    listVitalSigns: state.listVitalSigns.data,
    listWeightHeight: state.listWeightHeight.data,
    saveVitalSigns: state.saveVitalSigns.data,
    saveWeightHeight: state.saveWeightHeight.data,
    updateVitalSigns: state.updateVitalSigns.data,
    updateWeightHeight: state.updateWeightHeight.data,
  }
}

export default connect(mapStateToProps)(TakeOrderViewController)
