import { ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'

interface FormularioVagasProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  children?: React.ReactNode
}

interface CampoVagasProps {
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

interface BotaoPesquisarVagasProps {
  type?: string | undefined
  onClick?: () => void
  children?: React.ReactNode
}

export const FormularioVagas = styled.form<FormularioVagasProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const CampoVagas = styled.input<CampoVagasProps>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

export const BotaoPesquisarVagas = styled.button<BotaoPesquisarVagasProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
