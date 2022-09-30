import * as React from "react";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {addImage} from '../../Redux/propertyImageSlice'

export default function ImageInformation() {
    const dispatch = useDispatch();
    let [Files, setFiles] = useState([]);

    let handleChange = (e) => {
        debugger;
        setFiles([]);
        for (let i = 0; i < e.target.files.length; i++) {
            Files.push({

                Attachement: e.target.files[i]

            })
        }

        dispatch(addImage(Files));
    }


    return (
        <div className="form-inline u-margin-huge">
            <div class="row mb-2">
                <div class="col-md-10">
                    <label for="formFileMultiple" class="form-label">
                        Property Images
                    </label>
                    <input
                        class="form-control"
                        type="file"
                        id="formFileMultiple"
                        multiple
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}
