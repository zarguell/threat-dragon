const el = {
    auth: {
        sessionExpired: 'Η συνεδρία σας έχει λήξει.  Παρακαλούμε συνδεθείτε εκ νέου για να συνεχίσετε.'
    },
    nav: {
        v2Warning: 'Αυτή είναι η έκδοση 2.0 του OWASP Threat Dragon και είναι ακόμα υπό ανάπτυξη. Μην την χρησιμοποιείτε για να τροποποιήσετε υπάρχοντα μοντέλα, καθώς αυτή η έκδοση μπορεί να τα χαλάσει!',
        loggedInAs: 'Σύνδεση ως'
    },
    home: {
        title: 'OWASP Threat Dragon',
        imgAlt: 'Threat Dragon Logo',
        description: 'Το Threat Dragon είναι ένα δωρεάν, ανοιχτού κώδικα εργαλείο μοντελοποίησης απειλών (threat modeling) του Οργανισμού OWASP. Μπορεί να χρησιμοποιηθεί ως μια αυτόνομη desktop εφαρμογή για Windows, MacOS και Linux ή ως μια web εφαρμογή. Η desktop εφαρμογή είναι ιδανική αν θέλετε να δοκιμάσετε την εφαρμογή χωρίς να της δώσετε πρόσβαση στα github αποθετήρια σας, αλλά αν επιλέξετε την online έκδοση τότε θα "εξαπολύσετε" την φοβερή δύναμη του GitHub στα μοντέλα απειλών σας! Προφανώς, για να το κάνετε αυτό θα πρέπει πρώτα να συνδεθείτε.',
        loginWith: 'Είσοδος με'
    },
    providers: {
        github: {
            displayName: 'GitHub'
        },
        local: {
            displayName: 'Τοπική Συνεδρία'
        }
    },
    dashboard: {
        welcome: {
            title: 'Καλώς ήρθατε!',
            description: 'Είστε έτοιμοι να ξεκινήσετε να κάνετε τα σχέδια των εφαρμογών σας πιο ασφαλή. Μπορείτε να ανοίξετε ένα υφιστάμενο μοντέλο απειλών ή να δημιουργήσετε ένα καινούργιο επιλέγοντας μία από τις παρακάτω επιλογές. '
        },
        actions: {
            openExisting: 'Άνοιγμα ενός υφιστάμενου μοντέλου απειλών',
            createNew: 'Δημιουργήστε ένα νέο, κενό μοντέλο απειλών',
            demo: 'Εξερευνήστε ένα δείγμα μοντέλου απειλών',
            import: 'Εισάγετε ένα μοντέλο απειλών σε μορφή JSON'
        }
    },
    demo: {
        select: 'Επιλέξτε ένα δείγμα μοντέλου απειλών από την παρακάτω λίστα'
    },
    desktop: {
        file: {
            heading: 'Αρχείο',
            close: 'Κλείσιμο Μοντέλου',
            open: 'Άνοιγμα Μοντέλου',
            save: 'Αποθήκευση Μοντέλου',
            saveAs: 'Αποθήκευση Μοντέλου ως'
        },
        help: {
            heading: 'Βοήθεια',
            docs: 'Τεκμηρίωση',
            visit: 'Επισκεφθείτε μας στον OWASP',
            sheets: 'OWASP Cheat Sheets',
            github: 'Επισκεφθείτε μας στο GitHub',
            submit: 'Υποβάλετε ένα πρόβλημα',
            check: 'Έλεγχος για ενημερώσεις ...'
        }
    },
    repository: {
        select: 'Επιλέξτε ένα',
        from: 'αποθετήριο (repository) από την παρακάτω λίστα',
        noneFound: 'Δε βρέθηκαν αποθετήρια. Για να ξεκινήσετε, δημιουργήστε ένα νέο αποθετήριο τώρα στο'
    },
    branch: {
        select: 'Επιλέξτε ένα παρακλάδι (branch) από',
        from: 'από την παρακάτω λίστα ή',
        chooseRepo: 'επιλέξτε ένα άλλο αποθετήριο'
    },
    threatmodelSelect: {
        select: 'Επιλέξτε ένα μοντέλο απειλών από',
        from: 'από την παρακάτω λίστα, ή επιλέξτε ένα άλλο',
        branch: 'παρακλάδι (branch)',
        or: 'ή',
        repo: 'αποθετήριο',
        newThreatModel: 'Δημιουργήστε ένα νέο μοντέλο απειλών'
    },
    threatmodel: {
        contributors: 'Συνεισφέροντες',
        contributorsPlaceholder: 'Προσθήκη ενός νέου συνεισφέροντος',
        description: 'Περιγραφή Συστήματος Υψηλού Επιπέδου',
        dragAndDrop: 'Drag and drop or ',
        editing: 'Υπό επεξεργασία',
        jsonPaste: 'Κάντε επικόλληση (Paste) του JSON από το μοντέλο απειλών σας εδώ',
        owner: 'Ιδιοκτήτης',
        reviewer: 'Αξιολογητής',
        title: 'Τίτλος',
        diagram: {
            diagrams: 'Διαγράμματα',
            addNewDiagram: 'Προσθέστε ένα νέο διάγραμμα...',
            generic: {
                diagramTitle: 'Νέο γενικό διάγραμμα',
                select: 'Generic'
            },
            stride: {
                diagramTitle: 'Νέο διάγραμμα STRIDE',
                select: 'STRIDE'
            },
            linddun: {
                diagramTitle: 'Νέο διάγραμμα LINDDUN',
                select: 'LINDDUN'
            },
            cia: {
                diagramTitle: 'Νέο διάγραμμα CIA',
                select: 'CIA'
            }
        },
        threats: 'Απειλές',
        errors: {
            dropSingleFileOnly: 'Drag and drop requires a single file.',
            invalidJson: 'Μη έγκυρο JSON.  Παρακαλούμε ελέγξτε το μοντέλο και προσπαθήστε ξανά.',
            onlyJsonAllowed: 'Only files that end with .json are supported.',
            open: 'Error opening this Threat Model. Check the developer console for more information',
            save: 'Σφάλμα κατά την αποθήκευση του μοντέλου απειλών. Παρακαλούμε ελέγξτε την κονσόλα για περαιτέρω πληροφορίες'
        },
        opened: 'Threat model successfully opened',
        saved: 'Το μοντέλο απειλών αποθηκεύτηκε επιτυχώς',
        properties: {
            title: 'Ιδιότητες',
            emptyState: 'Επιλέξτε ένα στοιχείο στο διάγραμμα για να το επεξεργαστείτε',
            name: 'Όνομα',
            text: 'Κείμενο',
            description: 'Περιγραφή',
            outOfScope: 'Εκτός πεδίου εφαρμογής',
            reasonOutOfScope: 'Λόγος εκτός πεδίου εφαρμογής',
            privilegeLevel: 'Επίπεδο δικαιώματος',
            isALog: 'Είναι αρχείο καταγραφής',
            storesCredentials: 'Αποθηκεύει στοιχεία πρόσβασης',
            isEncrypted: 'Κρυπτογραφημένο',
            isSigned: 'Υπογεγραμμένο',
            providesAuthentication: 'Παρέχει αυθεντικοποίηση',
            protocol: 'Πρωτόκολλο',
            publicNetwork: 'Δημόσιο Δίκτυο'
        },
        buttons: {
            delete: 'Διαγραφή επιλεγμένων',
            redo: 'Επανάληψη',
            shortcuts: 'Συντομεύσεις Πληκτρολογίου',
            toggleGrid: 'Εναλλαγή Πλέγματος',
            undo: 'Αναίρεση',
            zoomIn: 'Μεγένθυνση',
            zoomOut: 'Σμίκρυνση'
        },
        shortcuts: {
            title: 'Συντομεύσεις',
            copy: {
                shortcut: '(ctrl/cmd) + c',
                action: 'Αντιγραφή'
            },
            paste: {
                shortcut: '(ctrl/cmd) + v',
                action: 'Επικόλληση'
            },
            undo: {
                shortcut: '(ctrl/cmd) + z',
                action: 'Αναίρεση'
            },
            redo: {
                shortcut: '(ctrl/cmd) + y',
                action: 'Επανάληψη'
            },
            delete: {
                shortcut: 'del',
                action: 'Διαγραφή'
            },
            pan: {
                shortcut: 'shift + αριστερό κλικ (κράτημα/σύρσιμο)',
                action: 'οριζόντια/κάθετη μετακίνηση'
            },
            multiSelect: {
                shortcut: 'κάντε αριστερό κλικ σε ένα άδειο σημείο και σύρετε',
                action: 'Πολλαπλή Επιλογή'
            },
            zoom: {
                shortcut: '(ctrl/cmd) + τροχός κύλισης',
                action: 'Εστίαση'
            }
        },
        stencil: {
            boundaries: 'Όρια',
            components: 'Συστατικά',
            entities: 'Οντότητες',
            metadata: 'Μεταδεδομένα',
            search: 'Αναζήτηση',
            notFound: 'Δεν το έχουμε ακόμα αυτό, θέλετε να ανοίξετε ένα issue; :)'
        },
        shapes: {
            actor: 'Παράγοντας',
            flow: 'Ροή Δεδομένων',
            flowStencil: 'Ροή Δεδομένων',
            process: 'Διαδικασία',
            store: 'Αποθετήριο Δεδομένων',
            text: 'Κείμενο',
            trustBoundary: 'Όριο Εμπιστοσύνης'
        }
    },
    forms: {
        apply: 'Εφαρμογή',
        cancel: 'Ακύρωση',
        close: 'Κλείσιμο',
        closeModel: 'Κλείσιμο Μοντέλου',
        delete: 'Διαγραφή',
        discardTitle: 'Απόρριψη αλλαγών;',
        discardMessage: 'Είστε σίγουροι ότι θέλετε να απορρίψετε τις αλλαγές;',
        edit: 'Επεξεργασία',
        import: 'Εισαγωγή',
        ok: 'OK',
        open: 'Άνοιγμα',
        openModel: 'Άνοιγμα Μοντέλου',
        print: 'ΕΚτύπωση',
        reload: 'Φόρτωση εκ νέου',
        remove: 'Αφαίρεση',
        report: 'Αναφορά',
        save: 'Αποθήκευση',
        saveAs: 'Αποθήκευση ως',
        saveModel: 'Αποθήκευση Μοντέλου',
        saveModelAs: 'Αποθήκευση Μοντέλου ως',
        savePdf: 'Αποθήκευση PDF',
        search: 'Αναζήτηση'
    },
    threats: {
        model: {
            cia: {
                header: '--- CIA ---',
                confidentiality: 'Εμπιστευτικότητα',
                integrity: 'Ακεραιότητα',
                availability: 'Διαθεσιμότητα'
            },
            linddun: {
                header: '--- LINDDUN ---',
                linkability: 'Συνδεσιμότητα',
                identifiability: 'Αναγνωρισιμότητα',
                nonRepudiation: 'Μη αποποίηση',
                detectability: 'Ανιχνευσιμότητα',
                disclosureOfInformation: 'Αποκάλυψη Πληροφοριών (Information Disclosure)',
                unawareness: 'Έλλειψη επίγνωσης (Unawareness)',
                nonCompliance: 'Μη συμμόρφωση (Non-compliance)'
            },
            stride: {
                header: '--- STRIDE ---',
                spoofing: 'Παραπλάνηση (Spoofing)',
                tampering: 'Παραποίηση (Tampering)',
                repudiation: 'Αποποίηση (Repudiation)',
                informationDisclosure: 'Αποκάλυψη Πληροφοριών (Information Disclosure)',
                denialOfService: 'Άρνηση εκτέλεσης υπηρεσίας (Denial of service)',
                elevationOfPrivilege: 'Αναβάθμιση προνομίων (Elevation of Priviledge)'
            }
        },
        generic: {
            default: 'Νέα γενική απειλή',
            cia: 'Νέα απειλή CIA',
            linddun: 'Νέα απειλή LINDDUN',
            stride: 'Νέα απειλή STRIDE'
        },
        edit: 'Επεξεργασία Απειλής',
        confirmDeleteTitle: 'Επιβεβαίωση Διαγραφής',
        confirmDeleteMessage: 'Είστε σίγουροι ότι θέλετε να διαγράψετε αυτή την απειλή;',
        description: 'Παρέχετε μια περιγραφή για αυτή την απειλή',
        emptyThreat: 'Επιλέξτε ένα στοιχείο στο γράφημα για να προσθέσετε την απειλή',
        mitigation: 'Παρέχετε μετριασμό ή πρόληψη για αυτή την απειλή',
        newThreat: 'Νέα Απειλή',
        newThreatByType: 'Νέα απειλή βάσει τύπου',
        newThreatByContext: 'Νέα απειλή βάσει του γενικότερου πλαισίου (Context)',
        properties: {
            description: 'Περιγραφή',
            mitigation: 'Μέτρα Μετριασμού Κινδύνου (mitigations)',
            modelType: 'Τύπος Μοντέλου',
            number: 'Number',
            priority: 'Προτεραιότητα',
            score: 'Σκορ',
            status: 'Κατάσταση',
            title: 'Τίτλος',
            type: 'Τύπος'
        },
        status: {
            notApplicable: 'Δεν έχει εφαρμογή',
            open: 'Ανοιχτή',
            mitigated: 'Καλύφθηκε'
        },
        priority: {
            low: 'Χαμηλή',
            medium: 'Μεσαία',
            high: 'Υψηλή'
        }
    },
    report: {
        options: {
            showOutOfScope: 'Εμφάνιση απειλών εκτός πεδίου εφαρμογής',
            showMitigatedThreats: 'Εμφάνιση απειλών που έχουν μετριαστεί',
            showModelDiagrams: 'Εμφάνιση διαγραμμάτων μοντέλων',
            showBranding: 'Εμφάνιση λογότυπων Threat Dragon'
        },
        title: 'Αναφορά μοντέλου απειλών για',
        dateGenerated: 'Ημερομηνία δημιουργίας',
        executiveSummary: 'Επιτελική Σύνοψη',
        notProvided: 'Δεν παρασχέθη',
        summary: 'Σύνοψη',
        threatStats: {
            total: 'Σύνολο απειλών',
            mitigated: 'Σύνολο μετριασμένων',
            notMitigated: 'Μη μετριασμένες',
            openHigh: 'Ανοιχτές / Υψηλής Προτεραιότητας',
            openMedium: 'Ανοιχτές / Μέτριας Προτεραιότητας',
            openLow: 'Ανοιχτές / Χαμηλής Προτεραιότητας',
            openUnknown: 'Ανοιχτές / Άγνωστης Προτεραιότητας'
        }
    },
    upgrade: {
        modal: {
            header: 'Ενημέρωση Μοντέλου Απειλών',
            welcome: 'Καλώς ήρθατε στην 2η έκδοση του OWASP Threat Dragon!',
            p1: 'Η 2η έκδοση χρησιμοποιεί μια διαφορετική βιβλιοθήκη σχεδίασης, η οποία θα αλλάξει τον τρόπο με τον οποίο μέρη των μοντέλων απειλών αποθηκεύονται. Ενώ τα περισσότερα διαγράμματα θα δείχνουν το ίδιο όπως στις προηγούμενες εκδόσεις του Threat Dragon, υπάρχουν περιπτώσεις κατά τις οποίες ενδέχεται να απαιτηθούν κάποιες τροποποιήσεις.',
            p2: 'Μετά το κλείσιμο του μοντέλου, θα δείτε πως κάθε διάγραμμα στο μοντέλο απεικονίζεται στη μορφή της 2ης έκδοση. Παρακαλούμε όπως σημειώσετε τα διαγράμματα που τυχόν απαιτήσουν τροποποιήσεις. Αυτή είναι μία "εφάπαξ" αναβάθμιση, και δε θα χρειαστεί να δείτε ξανά αυτό το μήνυμα μετά την αποθήκευση του μοντέλου.'
        },
        instructions: 'Τέλεια! Ας προχωρήσουμε στο μοντέλο σας.',
        continue: 'Συνέχεια στο μοντέλο απειλών'
    }
};

export default el;
