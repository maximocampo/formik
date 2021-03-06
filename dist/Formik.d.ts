import * as React from 'react';
import { FormikActions, FormikConfig, FormikErrors, FormikState, FormikTouched, FormikValues } from './types';
export declare class Formik<Values = FormikValues> extends React.Component<FormikConfig<Values>, FormikState<Values>> {
    static defaultProps: {
        validateOnChange: boolean;
        validateOnBlur: boolean;
        isInitialValid: boolean;
        enableReinitialize: boolean;
    };
    initialValues: Values;
    didMount: boolean;
    hcCache: {
        [key: string]: (e: unknown | React.ChangeEvent<any>) => void;
    };
    hbCache: {
        [key: string]: (e: any) => void;
    };
    fields: {
        [field: string]: React.Component<any>;
    };
    validator: any;
    constructor(props: FormikConfig<Values>);
    registerField: (name: string, Comp: React.Component<any, {}, any>) => void;
    unregisterField: (name: string) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<FormikConfig<Values>>): void;
    setErrors: (errors: FormikErrors<Values>) => void;
    setTouched: (touched: FormikTouched<Values>) => void;
    setValues: (values: Values) => void;
    setStatus: (status?: any) => void;
    setError: (error: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    validateField: (field: string) => Promise<Object>;
    runSingleFieldLevelValidation: (field: string, value: string | void) => Promise<string>;
    runFieldLevelValidations(values: FormikValues): Promise<FormikErrors<Values>>;
    runValidateHandler(values: FormikValues): Promise<FormikErrors<Values>>;
    runValidationSchema: (values: FormikValues) => Promise<{}>;
    runValidations: (values?: FormikValues) => Promise<FormikErrors<Values>>;
    handleChange: (eventOrPath: string | React.ChangeEvent<any>) => void | ((eventOrValue: unknown) => void);
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
    submitForm: () => Promise<void>;
    executeSubmit: () => void;
    executeInvalidSubmit: () => void;
    handleBlur: (eventOrPath: string | React.FocusEvent<any>) => void | ((e?: React.FocusEvent<any> | undefined) => void);
    setFieldTouched: (field: string, touched?: boolean, shouldValidate?: boolean) => void;
    setFieldError: (field: string, message: string | undefined) => void;
    resetForm: (nextValues?: Values | undefined) => void;
    handleReset: () => void;
    setFormikState: (s: any, callback?: (() => void) | undefined) => void;
    validateForm: (values: Values) => Promise<FormikErrors<Values>>;
    getFormikActions: () => FormikActions<Values>;
    getFormikComputedProps: () => {
        dirty: boolean;
        isValid: boolean;
        initialValues: Values;
    };
    getFormikBag: () => {
        registerField: (name: string, Comp: React.Component<any, {}, any>) => void;
        unregisterField: (name: string) => void;
        handleBlur: (eventOrPath: string | React.FocusEvent<any>) => void | ((e?: React.FocusEvent<any> | undefined) => void);
        handleChange: (eventOrPath: string | React.ChangeEvent<any>) => void | ((eventOrValue: unknown) => void);
        handleReset: () => void;
        handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
        validateOnChange: boolean | undefined;
        validateOnBlur: boolean | undefined;
        dirty: boolean;
        isValid: boolean;
        initialValues: Values;
        setStatus(status?: any): void;
        setError(e: any): void;
        setErrors(errors: FormikErrors<Values>): void;
        setSubmitting(isSubmitting: boolean): void;
        setTouched(touched: FormikTouched<Values>): void;
        setValues(values: Values): void;
        setFieldValue(field: keyof Values & string, value: any, shouldValidate?: boolean | undefined): void;
        setFieldValue(field: string, value: any): void;
        setFieldError(field: keyof Values & string, message: string): void;
        setFieldError(field: string, message: string): void;
        setFieldTouched(field: keyof Values & string, isTouched?: boolean | undefined, shouldValidate?: boolean | undefined): void;
        setFieldTouched(field: string, isTouched?: boolean | undefined): void;
        validateForm(values?: any): Promise<FormikErrors<Values>>;
        validateField(field: string): void;
        resetForm(nextValues?: Values | undefined): void;
        submitForm(): void;
        setFormikState<K extends "error" | "values" | "errors" | "touched" | "isValidating" | "isSubmitting" | "status" | "submitCount">(f: (prevState: Readonly<FormikState<Values>>, props: any) => Pick<FormikState<Values>, K>, callback?: (() => any) | undefined): void;
        setFormikState<K extends "error" | "values" | "errors" | "touched" | "isValidating" | "isSubmitting" | "status" | "submitCount">(state: Pick<FormikState<Values>, K>, callback?: (() => any) | undefined): void;
        values: Values;
        error?: any;
        errors: FormikErrors<Values>;
        touched: FormikTouched<Values>;
        isValidating: boolean;
        isSubmitting: boolean;
        status?: any;
        submitCount: number;
    };
    getFormikContext: () => {
        validationSchema: any;
        validate: ((values: Values) => void | object | Promise<FormikErrors<Values>>) | undefined;
        initialValues: Values;
        registerField: (name: string, Comp: React.Component<any, {}, any>) => void;
        unregisterField: (name: string) => void;
        handleBlur: (eventOrPath: string | React.FocusEvent<any>) => void | ((e?: React.FocusEvent<any> | undefined) => void);
        handleChange: (eventOrPath: string | React.ChangeEvent<any>) => void | ((eventOrValue: unknown) => void);
        handleReset: () => void;
        handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
        validateOnChange: boolean | undefined;
        validateOnBlur: boolean | undefined;
        dirty: boolean;
        isValid: boolean;
        setStatus(status?: any): void;
        setError(e: any): void;
        setErrors(errors: FormikErrors<Values>): void;
        setSubmitting(isSubmitting: boolean): void;
        setTouched(touched: FormikTouched<Values>): void;
        setValues(values: Values): void;
        setFieldValue(field: keyof Values & string, value: any, shouldValidate?: boolean | undefined): void;
        setFieldValue(field: string, value: any): void;
        setFieldError(field: keyof Values & string, message: string): void;
        setFieldError(field: string, message: string): void;
        setFieldTouched(field: keyof Values & string, isTouched?: boolean | undefined, shouldValidate?: boolean | undefined): void;
        setFieldTouched(field: string, isTouched?: boolean | undefined): void;
        validateForm(values?: any): Promise<FormikErrors<Values>>;
        validateField(field: string): void;
        resetForm(nextValues?: Values | undefined): void;
        submitForm(): void;
        setFormikState<K extends "error" | "values" | "errors" | "touched" | "isValidating" | "isSubmitting" | "status" | "submitCount">(f: (prevState: Readonly<FormikState<Values>>, props: any) => Pick<FormikState<Values>, K>, callback?: (() => any) | undefined): void;
        setFormikState<K extends "error" | "values" | "errors" | "touched" | "isValidating" | "isSubmitting" | "status" | "submitCount">(state: Pick<FormikState<Values>, K>, callback?: (() => any) | undefined): void;
        values: Values;
        error?: any;
        errors: FormikErrors<Values>;
        touched: FormikTouched<Values>;
        isValidating: boolean;
        isSubmitting: boolean;
        status?: any;
        submitCount: number;
    };
    render(): JSX.Element;
}
export declare function yupToFormErrors<Values>(yupError: any): FormikErrors<Values>;
export declare function validateYupSchema<T extends FormikValues>(values: T, schema: any, sync?: boolean, context?: any): Promise<Partial<T>>;
