// ------------------------------------------
// -- Add Product Workflow information to this config
// -- new WorkflowStep(step, partial_step, description_german, description_english, product_id (-1 => no need to scan));
// ------------------------------------------

import { WorkflowStep } from "./WorkflowStep";

export class ProductWorkflow {

    workflow_step_array: WorkflowStep[] = [];

    //------------------- 1 ----------------------------
    workflowstep1_1: WorkflowStep = {
        step: 1,
        partial_step: 1,
        description_german: 'Suchen Sie das weiße Bodenstück des Batteriegehäuses. Es ist eine quadratische Füllform.',
        description_german_short: 'Suchen Sie das weiße Bodenstück des Batteriegehäuses.',
        description_english: "Look for the white bottom part of the battery compartment. It's a square shape.",
        description_english_short: 'Look for the white bottom part of the battery compartment.',
        product_id: -1,
        picture_path_before: '',
        picture_path_after: './assets/product_pictures/pngs/schritt_1_find.png',
        done: false,
        current_active: false
    };

    workflowstep1_2: WorkflowStep = {
        step: 1,
        partial_step: 2,
        description_german: 'Scannen Sie das weiße Bauteil, um es zu verifizieren.',
        description_german_short: 'Scannen Sie das Bauteil.',
        description_english: 'Scan the white product to verify.',
        description_english_short: 'Scan the white product.',
        product_id: 1,
        picture_path_before: '',
        picture_path_after: './assets/product_pictures/pngs/schritt_1_find.png',
        done: false,
        current_active: false
    };

    workflowstep1_3: WorkflowStep = {
        step: 1,
        partial_step: 3,
        description_german: 'Platzieren Sie das weiße Bauteil auf der Baufläche. Die Öffnung muss dabei nach oben zeigen.',
        description_german_short: 'Platzieren Sie das weiße Bauteil.',
        description_english: 'Place the white component on the construction surface. Ensure that the opening faces upwards.',
        description_english_short: 'Place the white component on the construction surface.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_find.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_1_put.png',
        done: false,
        current_active: false
    };

    //------------------- 2 ----------------------------
    workflowstep2_1: WorkflowStep = {
        step: 2,
        partial_step: 1,
        description_german: 'Suchen Sie die obere, orange Druckplatte. Es ist eine rechteckige Klammer, die an den Seiten rechtwinklige Formen aufweist.',
        description_german_short: 'Suchen Sie die obere, orange Druckplatte.',
        description_english: "Look for the upper, orange pressure plate. It's a rectangular bracket that has right-angled shapes on the sides.",
        description_english_short: 'Look for the upper, orange pressure plate.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_2_find.png',
        done: false,
        current_active: false
    };

    workflowstep2_2: WorkflowStep = {
        step: 2,
        partial_step: 2,
        description_german: 'Scannen Sie die orange Druckplatte, um es zu verifizieren.',
        description_german_short: 'Scannen Sie die orange Druckplatte.',
        description_english: 'Scan the orange pressure plate to verify.',
        description_english_short: 'Scan the orange pressure plate',
        product_id: 2,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_2_find.png',
        done: false,
        current_active: false
    };

    workflowstep2_3: WorkflowStep = {
        step: 2,
        partial_step: 3,
        description_german: 'Platzieren Sie das orange Bauteil in dem vorher platzierten weißen Bauteil am oberen Rand wie auf dem Bild zu sehen.',
        description_german_short: 'Platzieren Sie das orange Bauteil im weißen.',
        description_english: 'Place the orange product in the white product as shown in the illustration.',
        description_english_short: 'Place the orange product in the white one.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_2_put.png',
        done: false,
        current_active: false
    };

    //------------------- 3 ----------------------------
    workflowstep3_1: WorkflowStep = {
        step: 3,
        partial_step: 1,
        description_german: 'Suchen Sie die untere, orange Druckplatte. Es ist eine rechteckige Klammer, die an den Seiten rechtwinklige Formen aufweist.',
        description_german_short: 'Suchen Sie die untere, orange Druckplatte.',
        description_english: "Look for the lower, orange pressure plate. It's a rectangular bracket that has right-angled shapes on the sides.",
        description_english_short: 'Look for the lower, orange pressure plate.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_2_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_3_find.png',
        done: false,
        current_active: false
    };

    workflowstep3_2: WorkflowStep = {
        step: 3,
        partial_step: 2,
        description_german: 'Scannen Sie die orange Druckplatte, um es zu verifizieren.',
        description_german_short: 'Scannen Sie die orange Druckplatte.',
        description_english: 'Scan the orange pressure plate to verify.',
        description_english_short: 'Scan the orange pressure plate',
        product_id: 3,
        picture_path_before: './assets/product_pictures/pngs/schritt_2_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_3_find.png',
        done: false,
        current_active: false
    };

    workflowstep3_3: WorkflowStep = {
        step: 3,
        partial_step: 3,
        description_german: 'Platzieren Sie die Platte in dem vorher platzierten weißen Batteriegehäuse am untere Rand wie auf dem Bild zu sehen.',
        description_german_short: 'Platzieren Sie die Platte unten im Batteriegehäuse.',
        description_english: 'Place the orange product inside the battery compartment as shown in the illustration.',
        description_english_short: 'Place the orange product at the bottom inside the battery compartment.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_2_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_3_put.png',
        done: false,
        current_active: false
    };

    //------------------- 4 ----------------------------
    workflowstep4_1: WorkflowStep = {
        step: 4,
        partial_step: 1,
        description_german: 'Suchen Sie die rechte, grüne Isolierplatte. Sie ist in ein flaches, grünes Rechteck.',
        description_german_short: 'Suchen Sie die rechte, grüne Isolierplatte.',
        description_english: "Look for the right green insulating plate. It's in a flat, green rectangle.",
        description_english_short: 'Look for the right green insulating plate.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_3_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_4_find.png',
        done: false,
        current_active: false
    };

    workflowstep4_2: WorkflowStep = {
        step: 4,
        partial_step: 2,
        description_german: 'Scannen Sie die grüne Isolierplatte, um es zu verifizieren.',
        description_german_short: 'Scannen Sie die grüne Isolierplatte.',
        description_english: 'Scan the green insulating plate to verify.',
        description_english_short: 'Scan the green insulating pressure plate',
        product_id: 4,
        picture_path_before: './assets/product_pictures/pngs/schritt_3_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_4_find.png',
        done: false,
        current_active: false
    };

    workflowstep4_3: WorkflowStep = {
        step: 4,
        partial_step: 3,
        description_german: 'Platzieren Sie die grüne Isolierplatte auf der rechten Seite im Batteriegehäuse. Klemmen Sie es zwischen die beiden orangen Druckplatten.',
        description_german_short: 'Platzieren Sie die grüne Isolierplatte im Batteriegehäuse.',
        description_english: 'Place the green insulating plate pn the right side inside the battery compartment. Clamp it between the two orange pressure plates.',
        description_english_short: 'Place the green insulating plate inside the battery compartment.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_3_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_4_put.png',
        done: false,
        current_active: false
    };

    //------------------- 5 ----------------------------
    workflowstep5_1: WorkflowStep = {
        step: 5,
        partial_step: 1,
        description_german: 'Suchen Sie die linke, grüne Isolierplatte. Sie ist in ein flaches, grünes Rechteck.',
        description_german_short: 'Suchen Sie die linke, grüne Isolierplatte.',
        description_english: "Look for the left green insulating plate. It's in a flat, green rectangle.",
        description_english_short: 'Look for the left green insulating plate.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_4_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_5_find.png',
        done: false,
        current_active: false
    };

    workflowstep5_2: WorkflowStep = {
        step: 5,
        partial_step: 2,
        description_german: 'Scannen Sie die grüne Isolierplatte, um es zu verifizieren.',
        description_german_short: 'Scannen Sie die grüne Isolierplatte.',
        description_english: 'Scan the green insulating plate to verify.',
        description_english_short: 'Scan the green insulating pressure plate',
        product_id: 5,
        picture_path_before: './assets/product_pictures/pngs/schritt_4_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_5_find.png',
        done: false,
        current_active: false
    };

    workflowstep5_3: WorkflowStep = {
        step: 5,
        partial_step: 3,
        description_german: 'Platzieren Sie die grüne Isolierplatte auf der linken Seite im Batteriegehäuse. Klemmen Sie es zwischen die beiden orangen Druckplatten.',
        description_german_short: 'Platzieren Sie die grüne Isolierplatte im Batteriegehäuse.',
        description_english: 'Place the green insulating plate on the left side inside the battery compartment. Clamp it between the two orange pressure plates.',
        description_english_short: 'Place the green insulating plate inside the battery compartment.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_4_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_5_put.png',
        done: false,
        current_active: false
    };

    //-----------------------------------------------------------------------------------------------------------------
    // -- hier kommt 9 mal derselbe Schritt für die Batteriezellen
    //------------------- 6 ----------------------------
    workflowstep6_1: WorkflowStep = {
        step: 6,
        partial_step: 1,
        description_german: 'Suchen Sie die erste weiße Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die erste weiße Batteriezelle.',
        description_english: 'Find the first white battery cell.',
        description_english_short: 'Find the first white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_5_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_6_find.png',
        done: false,
        current_active: false
    };

    workflowstep6_2: WorkflowStep = {
        step: 6,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 6,
        picture_path_before: './assets/product_pictures/pngs/schritt_5_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_6_find.png',
        done: false,
        current_active: false
    };

    workflowstep6_3: WorkflowStep = {
        step: 6,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle am unteren Rand.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it at the bottom of the battery compartment.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_5_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_6_put.png',
        done: false,
        current_active: false
    };

    //------------------- 7 ----------------------------
    workflowstep7_1: WorkflowStep = {
        step: 7,
        partial_step: 1,
        description_german: 'Suchen Sie die zweite weiße Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die zweite weiße Batteriezelle.',
        description_english: 'Find the second white battery cell.',
        description_english_short: 'Find the second white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_6_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_7_find.png',
        done: false,
        current_active: false
    };

    workflowstep7_2: WorkflowStep = {
        step: 7,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 7,
        picture_path_before: './assets/product_pictures/pngs/schritt_6_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_7_find.png',
        done: false,
        current_active: false
    };

    workflowstep7_3: WorkflowStep = {
        step: 7,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_6_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_7_put.png',
        done: false,
        current_active: false
    };

    //------------------- 8 ----------------------------
    workflowstep8_1: WorkflowStep = {
        step: 8,
        partial_step: 1,
        description_german: 'Suchen Sie die dritte weiße Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die dritte weiße Batteriezelle.',
        description_english: 'Find the third white battery cell.',
        description_english_short: 'Find the third white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_7_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_8_find.png',
        done: false,
        current_active: false
    };

    workflowstep8_2: WorkflowStep = {
        step: 8,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 8,
        picture_path_before: './assets/product_pictures/pngs/schritt_7_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_8_find.png',
        done: false,
        current_active: false
    };

    workflowstep8_3: WorkflowStep = {
        step: 8,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_7_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_8_put.png',
        done: false,
        current_active: false
    };

    //------------------- 9 ----------------------------
    workflowstep9_1: WorkflowStep = {
        step: 9,
        partial_step: 1,
        description_german: 'Suchen Sie die vierte weiße Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die vierte weiße Batteriezelle.',
        description_english: 'Find the fourth white battery cell.',
        description_english_short: 'Find the fourth white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_8_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_9_find.png',
        done: false,
        current_active: false
    };

    workflowstep9_2: WorkflowStep = {
        step: 9,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 9,
        picture_path_before: './assets/product_pictures/pngs/schritt_8_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_9_find.png',
        done: false,
        current_active: false
    };

    workflowstep9_3: WorkflowStep = {
        step: 9,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_8_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_9_put.png',
        done: false,
        current_active: false
    };

    //------------------- 10 ----------------------------
    workflowstep10_1: WorkflowStep = {
        step: 10,
        partial_step: 1,
        description_german: 'Suchen Sie die erste fünfte Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die fünfte weiße Batteriezelle.',
        description_english: 'Find the fifth white battery cell.',
        description_english_short: 'Find the fifth white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_9_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_10_find.png',
        done: false,
        current_active: false
    };

    workflowstep10_2: WorkflowStep = {
        step: 10,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 10,
        picture_path_before: './assets/product_pictures/pngs/schritt_9_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_10_find.png',
        done: false,
        current_active: false
    };

    workflowstep10_3: WorkflowStep = {
        step: 10,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_9_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_10_put.png',
        done: false,
        current_active: false
    };

    //------------------- 11 ----------------------------
    workflowstep11_1: WorkflowStep = {
        step: 11,
        partial_step: 1,
        description_german: 'Suchen Sie die erste sechste Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die sechste weiße Batteriezelle.',
        description_english: 'Find the sixth white battery cell.',
        description_english_short: 'Find the sixth white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_10_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_11_find.png',
        done: false,
        current_active: false
    };

    workflowstep11_2: WorkflowStep = {
        step: 11,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 11,
        picture_path_before: './assets/product_pictures/pngs/schritt_10_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_11_find.png',
        done: false,
        current_active: false
    };

    workflowstep11_3: WorkflowStep = {
        step: 11,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_11_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_12_find.png',
        done: false,
        current_active: false
    };

    //------------------- 12 ----------------------------
    workflowstep12_1: WorkflowStep = {
        step: 12,
        partial_step: 1,
        description_german: 'Suchen Sie die siebte weiße Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die siebte weiße Batteriezelle.',
        description_english: 'Find the seventh white battery cell.',
        description_english_short: 'Find the seventh white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_11_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_12_find.png',
        done: false,
        current_active: false
    };

    workflowstep12_2: WorkflowStep = {
        step: 12,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 12,
        picture_path_before: './assets/product_pictures/pngs/schritt_11_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_12_find.png',
        done: false,
        current_active: false
    };

    workflowstep12_3: WorkflowStep = {
        step: 12,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_12_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_13_find.png',
        done: false,
        current_active: false
    };

    //------------------- 13 ----------------------------
    workflowstep13_1: WorkflowStep = {
        step: 13,
        partial_step: 1,
        description_german: 'Suchen Sie die achte weiße Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die achte weiße Batteriezelle.',
        description_english: 'Find the eighth white battery cell.',
        description_english_short: 'Find the eighth white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_12_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_13_find.png',
        done: false,
        current_active: false
    };

    workflowstep13_2: WorkflowStep = {
        step: 13,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 13,
        picture_path_before: './assets/product_pictures/pngs/schritt_12_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_13_find.png',
        done: false,
        current_active: false
    };

    workflowstep13_3: WorkflowStep = {
        step: 13,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_13_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_14_find.png',
        done: false,
        current_active: false
    };

    //------------------- 14 ----------------------------
    workflowstep14_1: WorkflowStep = {
        step: 14,
        partial_step: 1,
        description_german: 'Suchen Sie die neunte weiße Batteriezelle. SIe ist in länglicher Form und ist 9 mal vorhanden.',
        description_german_short: 'Suchen Sie die neunte weiße Batteriezelle.',
        description_english: 'Find the nineth white battery cell.',
        description_english_short: 'Find the nineth white battery cell.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_13_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_14_find.png',
        done: false,
        current_active: false
    };

    workflowstep14_2: WorkflowStep = {
        step: 14,
        partial_step: 2,
        description_german: 'Scannen Sie die weiße Batteriezelle.',
        description_german_short: 'Scannen Sie die weiße Batteriezelle.',
        description_english: 'Scan the white battery cell.',
        description_english_short: 'Scan the white battery cell.',
        product_id: 14,
        picture_path_before: './assets/product_pictures/pngs/schritt_13_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_14_find.png',
        done: false,
        current_active: false
    };

    workflowstep14_3: WorkflowStep = {
        step: 14,
        partial_step: 3,
        description_german: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten. Platzieren Sie die Zelle über der vorherigen.',
        description_german_short: 'Platzieren Sie die weiße Batteriezelle horizontal zwischen den grünen Isolierplatten.',
        description_english: 'Place the battery cell horizontally between the green insulation plates. Place it on top of the last one.',
        description_english_short: 'Place the battery cell horizontally between the green insulation plates.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_14_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_15_find.png',
        done: false,
        current_active: false
    };

    //---------------------------------------------------------------------------------------
    // -- hier geht's nach den Batteriezellen weiter
    //------------------- 15 ----------------------------
    workflowstep15_1: WorkflowStep = {
        step: 15,
        partial_step: 1,
        description_german: 'Suchen Sie die grüne BMS Platine. Sie ist ein grünes, flaches Rechteck mit einen Platinendruck.',
        description_german_short: 'Suchen Sie die grüne BMS Platine.',
        description_english: "Look for the green BMS (Battery Management System) board. It's a green, flat rectangle with a printed circuit.",
        description_english_short: 'Find the green BMS slave circuit board.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_14_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_15_find.png',
        done: false,
        current_active: false
    };

    workflowstep15_2: WorkflowStep = {
        step: 15,
        partial_step: 2,
        description_german: 'Scannen Sie die grüne BMS Platine.',
        description_german_short: 'Scannen Sie die grüne BMS Platine.',
        description_english: 'Scan the green BMS slave circuit board.',
        description_english_short: 'Scan the green BMS slave circuit board.',
        product_id: 15,
        picture_path_before: './assets/product_pictures/pngs/schritt_14_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_15_find.png',
        done: false,
        current_active: false
    };

    workflowstep15_3: WorkflowStep = {
        step: 15,
        partial_step: 3,
        description_german: 'Platzieren Sie die grüne BMS Platine auf den Batteriezellen. Die Naht muss auf den Batteriezellen einrasten.',
        description_german_short: 'Platzieren Sie die grüne BMS Platine auf den Batteriezellen.',
        description_english: 'Place green BMS slave circuit board on top of the white battery cells as shown in the illustration.',
        description_english_short: 'Place green BMS slave circuit board on top of the white battery cells as shown in the illustration.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_find.png',
        done: false,
        current_active: false
    };

    //------------------- 16 ----------------------------
    workflowstep16_1: WorkflowStep = {
        step: 16,
        partial_step: 1,
        description_german: 'Suchen Sie den schwarzen Kabelbaum. Dieser ist ein kleiner, flacher, rechteckiger, schwarzer Chip.',
        description_german_short: 'Suchen Sie den schwarzen Kabelbaum.',
        description_english: 'Find the black wiring harness. It is a flat, rectangular, black chip.',
        description_english_short: 'Find the black wiring harness.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_find.png',
        done: false,
        current_active: false
    };

    workflowstep16_2: WorkflowStep = {
        step: 16,
        partial_step: 2,
        description_german: 'Scannen Sie den schwarzen Kabelbaum.',
        description_german_short: 'Scannen Sie den schwarzen Kabelbaum.',
        description_english: 'Scan the black wiring harness.',
        description_english_short: 'Scan the black wiring harness.',
        product_id: 16,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_find.png',
        done: false,
        current_active: false
    };

    workflowstep16_3: WorkflowStep = {
        step: 16,
        partial_step: 3,
        description_german: 'Platzieren Sie die grüne BMS Platine auf den Batteriezellen. Die Naht muss auf den Batteriezellen einrasten.',
        description_german_short: 'Platzieren Sie die grüne BMS Platine auf den Batteriezellen.',
        description_english: 'Place the green black wiring harness on top of the green BMS slave curcuit board as shown in the illustration.',
        description_english_short: 'Place the green black wiring harness as shown in the illustration.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_put.png',
        done: false,
        current_active: false
    };

    //------------------- 17 ----------------------------
    workflowstep17_1: WorkflowStep = {
        step: 17,
        partial_step: 1,
        description_german: 'Suchen Sie den weiße Batteriegehäusedeckel.',
        description_german_short: 'Suchen Sie den weiße Batteriegehäusedeckel.',
        description_english: 'Find the white housing cover. It is flat and rectangular.',
        description_english_short: 'Find the white housing cover.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_16_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_17_find.png',
        done: false,
        current_active: false
    };

    workflowstep17_2: WorkflowStep = {
        step: 17,
        partial_step: 2,
        description_german: 'Scannen Sie das weiße Batteriegehäuse.',
        description_german_short: 'Scannen Sie das weiße Batteriegehäuse.',
        description_english: 'Scan the white housing cover.',
        description_english_short: 'Scan the white housing cover.',
        product_id: 17,
        picture_path_before: './assets/product_pictures/pngs/schritt_16_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_17_find.png',
        done: false,
        current_active: false
    };

    workflowstep17_3: WorkflowStep = {
        step: 17,
        partial_step: 3,
        description_german: 'Platzieren Sie das das weiße Batteriegehäuse und schließen Sie das Batteriemodul.',
        description_german_short: 'Platzieren Sie das das weiße Batteriegehäuse.',
        description_english: 'Place the white housing cover as shown in the illustration.',
        description_english_short: 'Place the white housing cover as shown in the illustration.',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_16_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_17_put.png',
        done: false,
        current_active: false
    };
    


    constructor(){
        this.workflow_step_array = [];

        this.workflow_step_array.push(this.workflowstep1_1);
        this.workflow_step_array.push(this.workflowstep1_2);
        this.workflow_step_array.push(this.workflowstep1_3);

        this.workflow_step_array.push(this.workflowstep2_1);
        this.workflow_step_array.push(this.workflowstep2_2);
        this.workflow_step_array.push(this.workflowstep2_3);

        this.workflow_step_array.push(this.workflowstep3_1);
        this.workflow_step_array.push(this.workflowstep3_2);
        this.workflow_step_array.push(this.workflowstep3_3);

        this.workflow_step_array.push(this.workflowstep4_1);
        this.workflow_step_array.push(this.workflowstep4_2);
        this.workflow_step_array.push(this.workflowstep4_3);

        this.workflow_step_array.push(this.workflowstep5_1);
        this.workflow_step_array.push(this.workflowstep5_2);
        this.workflow_step_array.push(this.workflowstep5_3);

        this.workflow_step_array.push(this.workflowstep6_1);
        this.workflow_step_array.push(this.workflowstep6_2);
        this.workflow_step_array.push(this.workflowstep6_3);

        this.workflow_step_array.push(this.workflowstep7_1);
        this.workflow_step_array.push(this.workflowstep7_2);
        this.workflow_step_array.push(this.workflowstep7_3);

        this.workflow_step_array.push(this.workflowstep8_1);
        this.workflow_step_array.push(this.workflowstep8_2);
        this.workflow_step_array.push(this.workflowstep8_3);

        this.workflow_step_array.push(this.workflowstep9_1);
        this.workflow_step_array.push(this.workflowstep9_2);
        this.workflow_step_array.push(this.workflowstep9_3);

        this.workflow_step_array.push(this.workflowstep10_1);
        this.workflow_step_array.push(this.workflowstep10_2);
        this.workflow_step_array.push(this.workflowstep10_3);

        this.workflow_step_array.push(this.workflowstep11_1);
        this.workflow_step_array.push(this.workflowstep11_2);
        this.workflow_step_array.push(this.workflowstep11_3);

        this.workflow_step_array.push(this.workflowstep12_1);
        this.workflow_step_array.push(this.workflowstep12_2);
        this.workflow_step_array.push(this.workflowstep12_3);

        this.workflow_step_array.push(this.workflowstep13_1);
        this.workflow_step_array.push(this.workflowstep13_2);
        this.workflow_step_array.push(this.workflowstep13_3);

        this.workflow_step_array.push(this.workflowstep14_1);
        this.workflow_step_array.push(this.workflowstep14_2);
        this.workflow_step_array.push(this.workflowstep14_3);

        this.workflow_step_array.push(this.workflowstep15_1);
        this.workflow_step_array.push(this.workflowstep15_2);
        this.workflow_step_array.push(this.workflowstep15_3);

        this.workflow_step_array.push(this.workflowstep16_1);
        this.workflow_step_array.push(this.workflowstep16_2);
        this.workflow_step_array.push(this.workflowstep16_3);

        this.workflow_step_array.push(this.workflowstep17_1);
        this.workflow_step_array.push(this.workflowstep17_2);
        this.workflow_step_array.push(this.workflowstep17_3);

    }

    public get_product_workflow(){
        return this.workflow_step_array        
    }

    // returns all partial_steps for specific step
    public get_workflow_by_step(workflowsteps: WorkflowStep[], step_id:number){
        let steps: WorkflowStep[] = [];

        for (let step of workflowsteps) {
            if (step.step === step_id) {
                steps.push(step);
            }
        }      
        return steps
    }

    // returns all partial_steps for specific step
    public get_workflow_partial_step(workflowsteps: WorkflowStep[], step_id:number, partial_step_id:number){
        for (let step of workflowsteps) {
            if (step.step === step_id && step.partial_step === partial_step_id) {
                return step;
            }
        }      
        return this.workflowstep1_1;
    }

    public step_is_fully_done(workflowsteps: WorkflowStep[], step_id:number){
        let workflows = this.get_workflow_by_step(workflowsteps, step_id);
        return workflows[workflows.length -1].done
    }
}