import { Result, Skeleton } from 'antd'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import useWeekFinance from '../model/useWeekFinance'
import { useTheme } from '@/shared/config/ThemeContext'

const LastWeekFinance = () => {
  const { loading, data, error } = useWeekFinance()
  const { theme } = useTheme()

  if (error) {
    return <div className="card">{error}</div>
  }

  return (
    <div className="card">
      {loading ? (
        <Skeleton.Node active className="full-skeleton" />
      ) : data.length === 0 ? (
        <Result
          status="403"
          subTitle={<span className="text-lg font-exo2">Нет платежей за последние 7 дней</span>}
          className="pointer-events-none"
        />
      ) : (
        <>
          <h4 className="flex justify-end">Статистика за последние 7 дней</h4>
          <div className="py-10">
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke={theme === 'dark' ? '#f7f5f5' : '#141212'} />
                <YAxis stroke={theme === 'dark' ? '#f7f5f5' : '#141212'} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="Поступление" fill="#6359e9" barSize={20} minPointSize={5} />
                <Bar dataKey="Расход" fill="#64cff6" barSize={20} minPointSize={5} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  )
}

export default LastWeekFinance
