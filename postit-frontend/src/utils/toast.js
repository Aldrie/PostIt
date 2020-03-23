import React from 'react';
import { toast } from 'react-toastify';

export const successToast = (title, text) => toast.success(
	<>
		<strong>{title}</strong>
		<p>{text}</p>
	</>
);

export const errorToast = (title, text) => toast.error(
	<>
		<strong>{title}</strong>
		<p>{text}</p>
	</>
);

