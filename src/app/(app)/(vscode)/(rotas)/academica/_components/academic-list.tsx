import { makeGetAcademic } from '@/core/infra/services/academica-services'

export const AcademicList = async () => {
  const academic = await makeGetAcademic().execute()

  return <div>Lista de Educação</div>
}
