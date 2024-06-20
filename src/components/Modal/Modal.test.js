import {render, screen, fireEvent, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal';

afterEach(cleanup)

describe('Modal', () => {

    it('does not render modal by default', () => {
        render(<Modal title='Heading'/>)
        const heading = screen.queryByText('Heading')
        expect(heading).not.toBeInTheDocument()
    })

    it('renders modal when open', () => {
        render(<Modal isOpen={true} title='Heading'/>)
        const heading = screen.getByText('Heading')
        expect(heading).toBeInTheDocument()
    })

    it('closes modal when close button is clicked', () => {
        const closeModal = jest.fn()

        render(<Modal isOpen={true} title='Heading' closeModal={closeModal}/>)
        const heading = screen.getByText('Heading')
        expect(heading).toBeInTheDocument()

        const closeBtn = screen.getByText('Close')

        fireEvent.click(closeBtn)
        expect(closeModal).toHaveBeenCalledTimes(1)
    })
})

