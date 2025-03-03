import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  flex: 1;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme['gray-100']};
  }
  table{
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    thead{
       th {
          background-color: ${props => props.theme['gray-600']};
          padding: 1rem;
          text-align: left;
          color: ${props => props.theme['gray-100']};
          font-size: 0.875rem;
          line-height: 1.6;
          &:first-child{
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
          }
          &:last-child{
            border-top-right-radius: 8px;
            padding-right: 1.5rem;
          }
        }
    }
    tbody{
      td{
        background-color: ${props => props.theme['gray-700']};
          padding: 1rem;
          border-top: 4px solid ${props => props.theme['gray-800']};
          font-size: 0.875rem;
          line-height: 1.6;
          &:first-child{
            width: 50%;
            padding-left: 1.5rem;
          }
          &:last-child{
            padding-right: 1.5rem;
          }
      }
    }
  }
`
export const HistoryList = styled.div`
  flex: 1;  
  overflow: auto;
  margin-top: 2rem;
`



interface StatusProps {
  statusColor: 'yellow' | 'red' | 'green'
}
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before{
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${props => props.statusColor};
  }
`