import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import type { Variation, VariationOption } from '../../types/variationTypes';
type NewVariationFormProps = {
    handleSubmit: (newVariation: Variation) => void;
}
const NewVariationForm: React.FC<NewVariationFormProps> = ({ handleSubmit }) => {
    const [variations, setVariations] = useState<VariationOption[]>([]);
    const [inputVariationLabel, setInputVariationLabel] = useState("");
    const [inputVariationName, setInputVariationName] = useState("");
    const [variationType, setVariationType] = useState<"size" | "color" | "custom">("custom");

    const handleNewVariation = (e: React.FormEvent) => {
        e.preventDefault();
        const newVariation: VariationOption = {
            value: uuidv4(),
            label: inputVariationLabel.trim(),
        };
        setVariations((prev) => [newVariation, ...prev]);
        setInputVariationLabel("");
    }
    const submitNewVariation = (e: React.FormEvent) => {
        e.preventDefault();

        const newVariation: Variation = {
            id: uuidv4(),
            name: inputVariationName,
            type: variationType,
            options: variations,
            required: true,

        };
        handleSubmit(newVariation);
    }

    return (
        <Container>
            <Form onSubmit={handleNewVariation}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Add new variation option</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputVariationLabel}
                        onChange={(e) => setInputVariationLabel(e.target.value)}
                        required
                    />
                    <Button type='submit'>Lägg till Variation</Button>
                </Form.Group>
            </Form>
            <Form onSubmit={submitNewVariation}>
                <Form.Label>Variation Name</Form.Label>
                <Form.Control
                    type="text"
                    value={inputVariationName}
                    onChange={(e) => setInputVariationName(e.target.value)}
                    required
                />
                <Form.Select>
                    <option>Variationstyper till Din nya kategori</option>
                    {variations.map(variation =>
                        <option key={variation.value}>{variation.label}
                        </option>)}
                </Form.Select>
                <Form.Select value={variationType} onChange={(e) => setVariationType(e.target.value)}>
                    <option value="size">Storlek</option>
                    <option value="color">Färg</option>
                </Form.Select>
                <Button type='submit'>Lägg till Variation</Button>
            </Form>
        </Container>
    )
}

export default NewVariationForm