import { useState, useEffect } from 'react';
import { 
	Form, 
	Input, 
	InputNumber, 
	Upload, 
	Button,
	Select,
	message
} from 'antd';
import UploadButton from '../../components/UploadButton/UploadButton';
import unitsService from '../../services/unitsService';
import fruitService from '../../services/fruitsService';
import "antd/dist/antd.css";
import './AddFruit.css';


function AddFruit(props) {
    const [ name, setName ] = useState();
    const [ color, setColor ] = useState();
    const [ price, setPrice ] = useState();
    const [ unit, setUnit ] = useState();
    const [ quantity, setQuantity ] = useState();
    const [ image, setImage ] = useState();
	const [ validUnits, setValidUnits ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ imageUrl, setImageUrl ] = useState('');

	useEffect(() => {
        unitsService.getValidUnits()
            .then(result => setValidUnits(result.data))
    }, []); 

    const [form] = Form.useForm();
	const formItemLayout = {
		labelCol: {
		  xs: { span: 24 },
		  sm: { span: 8 },
		},
		wrapperCol: {
		  xs: { span: 24 },
		  sm: { span: 12 },
		},
	};
	const formButtonItemLayout = {
		wrapperCol: {
			xs: { span: 24, offset: 0 },
			sm: { span: 16, offset: 8 }
		}
	};
	

	const uploadHandler = info => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			
			return;
		}

		if (info.file.status === 'done') {
			const reader = new FileReader();
			const image = info.file.originFileObj;
			reader.addEventListener('load', () => {
				setImage(image);
				setImageUrl(reader.result);
				setLoading(false);
				message.success('Image uploaded successfully', 1);
			});
			reader.readAsDataURL(image);
		}
	};

    const submitHandler = () => {
        let fruit = new FormData();
        fruit.append('name', name);
        fruit.append('color', color);
        fruit.append('price', price);
        fruit.append('unit', unit);
        fruit.append('quantity', quantity);
        fruit.append('fruit_image', image);

        fruitService.addFruit(fruit)
            .then(response => {
                if (response.status === 201) {
                    props.history.push('/');
                } else {
                    console.log(response);
                }
            })
	}

	return (
        <Form
			{...formItemLayout}
			form={form}
			name="add-fruit"
			scrollToFirstError
			onFinish={submitHandler}
			className="add-fruit-form"
        >
          	<Form.Item
				name="name"
				label="Name"
				rules={[{ 
					required: true, 
					message: 'Name field is required!'
				}]}
          	>
            	<Input onChange={e => setName(e.target.value)}/>
          	</Form.Item>

			<Form.Item
				name="price"
				label="Price"
				rules={[{ 
					required: true,
					type: 'number',
					min: 0,
					message: 'Please enter a valid price!'
				}]}
			>
				<InputNumber onChange={e => setPrice(e)}/>
			</Form.Item>  

			<Form.Item
				name="color"
				label="Color"
				rules={[{ 
				required: true, 
				message: 'Color field is required!', 
				whitespace: true }]}
			>
				<Input onChange={e => setColor(e.target.value)}/>
			</Form.Item>  

			<Form.Item
				name="unit"
				label="Currency unit"
				rules={[{ 
					required: true, 
					message: 'Currency unit field is required!'
				}]}
			>
				<Select  
					placeholder="Select a currency units" 
					onChange={e => setUnit(e)}
				>
    				{validUnits.map(unit => (
						<Select.Option key={unit.code} value={unit.code}>
							{unit.name}
						</Select.Option>
					))}
  				</Select>
			</Form.Item>

			<Form.Item
				name="quantity"
				label="Quantity"
				rules={[{ 
					required: true,
					type: 'number',
					min: 0,
					message: 'Please enter a valid quantity'
				}]}
			>
				<InputNumber onChange={e => setQuantity(e)}/>
			</Form.Item>    

			<Form.Item
				name="fruit_image"
				label="Upload Fruit Image"
				rules={[{ 
					required: true,
					message: 'Uploading image is required!'
				}]}
			>
				<Upload
					name="avatar"
					listType="picture-card"
					className="avatar-uploader"
					showUploadList={false}
					action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					onChange={uploadHandler}
				>
					{imageUrl ? 
						<img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : 
						<UploadButton isLoading={loading}/>
					}
      			</Upload>
			</Form.Item>
			
			<Form.Item {...formButtonItemLayout}>
				<Button type="primary" htmlType="submit">Add Fruit</Button>
			</Form.Item>
        </Form>
	)
}

export default AddFruit
