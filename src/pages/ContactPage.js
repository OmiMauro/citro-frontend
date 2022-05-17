import React from 'react'
import Contact from '../components/Contacts/Contact'
import { useSelector } from 'react-redux'
import { selectorOrganization } from '../redux/slices/organization-slice'
const ContactPage = () => {
	const { organization } = useSelector(selectorOrganization)
	return <Contact organization={organization} />
}

export default ContactPage
